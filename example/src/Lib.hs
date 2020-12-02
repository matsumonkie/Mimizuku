module Lib
    ( someFunc
    ) where

import           Data.Foldable (foldl')

someFunc :: IO ()
someFunc = putStrLn "someFunc"

add :: Int -> Int -> Int
add x y =
  x + y

sum :: [Int] -> Int
sum xs =
  foldl' add 0 xs

foo :: String
foo =
  let x = 42
  in show x
