#!/bin/bash

hugo

echo "Enter commit message: "

read input_variable

git commit -a -m "$input_variable"

git push origin master

git subtree push --prefix=public https://github.com/umcaruje/kapilar.git gh-pages
