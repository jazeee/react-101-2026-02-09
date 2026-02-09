# React Workshop

## Introduction

In an engineering organization, the code and infrastructure can feel abstract, particularly since there are
often years of layered code and configuration.

The existing code makes it hard to understand core concepts and actors in the system. In addition, the code
can become stale, and it can help to start with a blank slate.

The goal of this workshop is to start from a baseline of standard packages and give you a place to write and test
code as we delve into concepts related to our work.

## Topics

1. Basic Feature page using MUI components
2. Data driven UI, state management, etc
   a. useState
   b. useRef
   c. Other state management tools - URL, browser storage.
3. Common patterns in code - aka, the reasons behind my PR comments
   a. Split components up by file - Hot Module Reloading, code splitting, state management, git review and file length
   b. Unnecessary memoization
   c. Named function arguments
   d. Use typed strings or enums to be declarative (avoid booleans, falsiness ambiguity, and risks of double negatives)
   e. Named exports, React code organization and file naming
4. API and Promise state management
   a. Deep dive into useQuery, useEffect, and understanding the dragons that lurk in the deep.
5. Context Providers
   a. Simply use `constate`!
