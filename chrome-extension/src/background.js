import { IzunaServerService } from './izunaServerService.js';
import { Constants } from './constants.js';

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ enableIzuna: true });
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [
        new chrome.declarativeContent.PageStateMatcher({
          pageUrl: { hostEquals: 'github.com' }, // enable extension icon when we are on github.com only
        })
      ],
      actions: [new chrome.declarativeContent.ShowPageAction()]
    }]);
  });

  chrome.storage.sync.get('enableIzuna', function(result) {
    if(result.enableIzuna) {
      const pullRequestInfo = getGithubPullRequestInfo(tabId, changeInfo, tab);
      if(pullRequestInfo) {
        const izunaServerUrl = 'https://izuna.app';
        const izunaServerService = new IzunaServerService(izunaServerUrl, pullRequestInfo);

        izunaServerService.fetchPullRequestCommitsDetails(pullRequestInfo).then(pullRequestDetails => {
          chrome.tabs.sendMessage(tab.id, { cmd: Constants.CMD_WHICH_FILES }, (files) => {
            izunaServerService.fetchFilesInfo(pullRequestDetails, files).then(payload => {
              chrome.tabs.sendMessage(tab.id, { cmd: Constants.CMD_IZUNA_INFO, payload: payload }, (response) => {});
            });
          });
        });
      }
    }
  });
});

/* if the current tab is loaded and is a github pull request page, return the pr info
 *  eg:
 *   input: https://github.com/matsumonkie/izuna-example/pull/7/files
 *   output: { owner: matsumonkie,
 *             repo: izuna-example,
 *             pullRequest: 7
 *           }
 */
function getGithubPullRequestInfo(tabId, changeInfo, tab) {
  const url = new URL(tab.url);
  if( changeInfo &&
      changeInfo.status &&
      changeInfo.status === 'complete' &&
      tab.active &&
      tab.status === 'complete' &&
      url.hostname === 'github.com') {
    const pathAction = url.pathname.split('/')[3];
    const prTab = url.pathname.split('/')[5];
    if(pathAction === 'pull' && prTab === 'files') {
      const [empty, user, repo, pull, pr, ...tail] = url.pathname.split("/");

      const pullRequestInfo = {
        user: user,
        repo: repo,
        pr: pr
      };
      Object.entries(pullRequestInfo).forEach(([key, value]) => {
        if(! value) { throw `Could not retrieve pull request info for key: ${key}` }
      });

      return pullRequestInfo;
    }
  }

  return false;
}
