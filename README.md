# JavaScript Algorithms and Data Structures

**This repository contains JavaScript based examples of many popular algorithms and data structures.**  
Each algorithm and data structure has its own separate README with related explanations and links for further reading (including references to videos and articles). This collection is intended for learning, interviews, and quick reference.

---

## Quick links / badges
(Replace these with your CI / coverage badges if available)
- CI: passing
- code coverage: 100%
- repo size: ~14.6 MiB

---

## Read this in other languages
(You can add translations here if you translate the docs)
简体中文, 繁體中文, 한국어, 日本語, Polski, Français, Español, Português, Русский, Türkçe, Italiano, Bahasa Indonesia, Українська, Arabic, Tiếng Việt, Deutsch, Uzbek, עברית

---

## Introduction

A data structure is a particular way of organizing and storing data in a computer so that it can be accessed and modified efficiently. More precisely, a data structure is a collection of data values, the relationships among them, and the functions or operations that can be applied to the data.

An algorithm is an unambiguous specification of how to solve a class of problems. It is a set of rules that precisely define a sequence of operations.

This repository groups implementations and explanations by topic. Each topic page contains theory, complexity analysis, and working JavaScript implementations (often multiple variants — naive/brute force, optimized, recursive/iterative).

**Skill keys used throughout the docs:**  
`B` - Beginner, `A` - Advanced

---

## Data Structures

A data structure is a way to store and organise data so it can be used efficiently. Each data structure has trade-offs — choose the one that fits the problem.

- **Linked List** `B`  
- **Doubly Linked List** `B`  
- **Queue** `B`  
- **Stack** `B`  
- **Hash Table** `B`  
- **Heap** `B` (max and min heap versions)  
- **Priority Queue** `B`  
- **Trie** `A`  
- **Tree** `A`  
  - Binary Search Tree `A`  
  - AVL Tree `A`  
  - Red-Black Tree `A`  
  - Segment Tree `A` (min/max/sum range queries)  
  - Fenwick Tree / Binary Indexed Tree `A`  
- **Graph** `A` (directed and undirected)  
- **Disjoint Set (Union-Find)** `A`  
- **Bloom Filter** `A`  
- **LRU Cache** `A` (Least Recently Used)

Each data structure page contains implementation, common operations, complexity analysis and typical use-cases.

---

## Algorithms

Algorithms are organized by topic. Each entry contains at least one JavaScript implementation and explanation.

### Algorithms by Topic

#### Math
- Bit Manipulation `B` — set/get/update/clear bits, shifts, power-of-two checks  
- Binary Floating Point `B` — representation basics  
- Factorial `B`  
- Fibonacci Number `B` — classic and closed-form versions  
- Prime Factors `B`  
- Primality Test `B` (trial division)  
- Euclidean Algorithm `B` — GCD  
- Least Common Multiple (LCM) `B`  
- Sieve of Eratosthenes `B` — primes up to N  
- Pascal's Triangle `B`  
- Fast Powering `B`  
- Horner's Method `B` — polynomial evaluation  
- Matrices operations `B`  
- Euclidean Distance `B`  
- Integer Partition `A`  
- Square Root (Newton's method) `A`  
- Liu Hui π Algorithm `A`  
- Discrete Fourier Transform `A`

#### Sets
- Cartesian Product `B`  
- Fisher–Yates Shuffle `B`  
- Power Set `A`  
- Permutations `A`  
- Combinations `A`  
- Longest Common Subsequence (LCS) `A`  
- Longest Increasing Subsequence (LIS) `A`  
- Shortest Common Supersequence (SCS) `A`  
- Knapsack Problem `A` (0/1 and unbounded)  
- Maximum Subarray / Kadane `A`  
- Combination Sum `A`

#### Strings
- Hamming Distance `B`  
- Palindrome checks `B`  
- Levenshtein Distance `A` (edit distance)  
- Knuth–Morris–Pratt (KMP) `A`  
- Z Algorithm `A`  
- Rabin–Karp `A`  
- Longest Common Substring `A`  
- Regular Expression Matching `A`

#### Searches
- Linear Search `B`  
- Jump Search / Block Search `B`  
- Binary Search `B`  
- Interpolation Search `B`

#### Sorting
- Bubble Sort `B`  
- Selection Sort `B`  
- Insertion Sort `B`  
- Merge Sort `B`  
- Quick Sort `B` (in-place and not)  
- Heap Sort `B`  
- Shellsort `B`  
- Counting Sort `B`  
- Radix Sort `B`  
- Bucket Sort `B`

#### Linked Lists
- Straight Traversal `B`  
- Reverse Traversal `B`

#### Trees
- Depth-First Search (DFS) `B`  
- Breadth-First Search (BFS) `B`

#### Graphs
- Depth-First Search (DFS) `B`  
- Breadth-First Search (BFS) `B`  
- Kruskal's Algorithm `A` — Minimum Spanning Tree (MST)  
- Dijkstra Algorithm `A` — shortest paths from a single source  
- Bellman-Ford `A` — single source shortest paths (negative edges)  
- Floyd–Warshall `A` — all pairs shortest paths  
- Cycle Detection `A` — directed & undirected  
- Prim's Algorithm `A` — MST  
- Topological Sorting `A` — via DFS  
- Articulation Points / Bridges `A` — Tarjan’s algorithms  
- Eulerian Path & Circuit `A` — Fleury’s algorithm / Hierholzer’s  
- Hamiltonian Cycle `A`  
- Strongly Connected Components `A` — Kosaraju's algorithm  
- Travelling Salesman Problem `A` (explanations / approximations)

#### Cryptography
- Polynomial Hash `B` (rolling hash)  
- Rail Fence Cipher `B`  
- Caesar Cipher `B`  
- Hill Cipher `B`

#### Machine Learning (toy examples)
- NanoNeuron `B` — tiny JS functions demonstrating forward/backprop  
- k-NN `B` — k-nearest neighbors  
- k-Means `B` — clustering

#### Image Processing
- Seam Carving `B` — content-aware resizing

#### Statistics
- Weighted Random `B` — select items by weight

#### Evolutionary algorithms
- Genetic Algorithm `A` — example applications

#### Uncategorized / Problem-style examples
- Tower of Hanoi `B`  
- Square Matrix Rotation `B` — in-place  
- Jump Game `B` — DP/backtracking/greedy examples  
- Unique Paths `B`  
- Trapping Rain Water `B`  
- Recursive Staircase `B`  
- Best Time to Buy and Sell Stocks `B`  
- Valid Parentheses `B`  
- N-Queens `A`  
- Knight's Tour `A`

---

## Algorithms by Paradigm

The repo also groups algorithms by paradigms and techniques: divide & conquer, dynamic programming (top-down & bottom-up), greedy, backtracking, branch & bound, linear programming approximations, etc. Each paradigm page explains common patterns, problem templates, and typical complexity trade-offs.

---

## How to use

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/your-repo-name.git
