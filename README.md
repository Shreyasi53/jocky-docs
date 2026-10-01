# JOCKY Documentation

Official documentation website for **JOCKY — Forensic Investigation Language**.

This repository contains the documentation and presentation website for JOCKY and the Mahoraga forensic compiler framework.

## About JOCKY

JOCKY is a domain-specific language designed for describing reproducible forensic investigations.

It provides a structured way to express forensic intent and compile it into a platform-independent Forensic IR that can be executed through native system providers.

The broader Mahoraga framework connects:

- JOCKY DSL
- Compiler & semantic validation
- Forensic IR / MLIR
- Native C++ runtime
- Linux & Windows providers
- Evidence collection and cryptographic sealing
- STIX 2.1 threat-intelligence output
- Jocky Forensic Workbench

## Documentation

The website covers:

- **Installation** — Set up the JOCKY/Mahoraga development environment
- **Quick Start** — Write and execute your first JOCKY investigation
- **What is JOCKY?** — Understand the language and its purpose
- **How JOCKY Works** — Learn about the compiler and execution pipeline
- **Architecture** — Explore the major components of Mahoraga
- **Forensic Execution** — Understand capability, provider and evidence flow
- **Technology** — Technologies used throughout the project
- **What We Built** — Overview of the major project components
- **Learn More** — Repository and project resources

## Tech Stack

This documentation website is built with:

- React
- Vite
- JavaScript
- Tailwind CSS

## Local Development

### 1. Clone the repository

```bash
git clone https://github.com/Shreyasi53/jocky-docs.git
cd jocky-docs