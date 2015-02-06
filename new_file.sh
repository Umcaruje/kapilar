#!/bin/bash

echo "Enter post name: "

read input_variable

hugo new post/$input_variable.md	