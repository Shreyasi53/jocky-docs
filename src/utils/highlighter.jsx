import React from 'react';

/**
 * Custom Syntax Highlighter for JOCKY Docs
 * Complementary Gold / Coffee / Champagne Palette:
 * - Keywords (#D4A72C): investigation, collect, as, emit, function, return, import, export, etc. (Gold)
 * - Strings & Targets (#C98B5B): "Endpoint Triage", string literals, file paths (Coffee / Copper)
 * - Built-ins & Primitives (#D6B98C): system_info, process_list, CLI tools, builtins (Champagne)
 * - Normal Identifiers & Text (#E5E1D8): sys, procs, conns, variables, default text (Warm White)
 * - Brackets & Operators (#8F8778): {, }, (, ), ;, ,, :, =, ->, => (Muted Warm Gray)
 * - Comments & Prompts (#787063): //..., #..., $, comments (Muted Warm Taupe/Brown)
 */

export function highlightToken(token, index, language = 'jocky') {
  const lang = (language || '').toLowerCase();

  // Comments (all languages)
  if (token.startsWith('//') || token.startsWith('/*') || (token.startsWith('#') && lang !== 'text' && lang !== 'plain')) {
    return <span key={index} className="text-[#787063] italic">{token}</span>;
  }

  // String Literals (all languages)
  if ((token.startsWith('"') && token.endsWith('"')) || (token.startsWith("'") && token.endsWith("'")) || (token.startsWith('`') && token.endsWith('`'))) {
    return <span key={index} className="text-[#C98B5B]">{token}</span>;
  }

  // JOCKY Language
  if (lang === 'jocky') {
    // Custom JOCKY Keywords (Gold)
    if (['investigation', 'collect', 'as', 'emit', 'import', 'export', 'return', 'if', 'else'].includes(token)) {
      return <span key={index} className="text-[#D4A72C] font-semibold">{token}</span>;
    }
    // Domain primitives / collection targets (Champagne)
    if (['system_info', 'process_list', 'network_connections', 'evidence', 'file_hash', 'memory_dump', 'registry_keys', 'file_system', 'user_accounts'].includes(token)) {
      return <span key={index} className="text-[#D6B98C] font-medium">{token}</span>;
    }
    // Punctuation & Braces (Muted Warm Gray)
    if (['{', '}', '(', ')', ';', ','].includes(token)) {
      return <span key={index} className="text-[#8F8778]">{token}</span>;
    }
    // Identifiers / Variables (Warm White: sys, procs, conns)
    if (/^[A-Za-z_][A-Za-z0-9_]*$/.test(token)) {
      return <span key={index} className="text-[#E5E1D8]">{token}</span>;
    }
  }

  // Bash / Shell
  if (lang === 'bash' || lang === 'sh' || lang === 'shell') {
    if (['git', 'python', 'python3', 'pip', 'pip3', 'cmake', 'make', 'uvicorn', 'npm', 'docker', 'docker-compose', 'cd', 'mkdir', 'source', 'cat', 'echo', 'touch', 'sudo'].includes(token)) {
      return <span key={index} className="text-[#D6B98C] font-semibold">{token}</span>;
    }
    if (['clone', 'build', 'install', 'up', 'run', 'dev', 'activate', 'checkout', 'commit', 'push', 'pull'].includes(token)) {
      return <span key={index} className="text-[#D4A72C]">{token}</span>;
    }
    if (token.startsWith('-')) {
      return <span key={index} className="text-[#C98B5B]">{token}</span>;
    }
    if (token === '$') {
      return <span key={index} className="text-[#787063] select-none">{token}</span>;
    }
  }

  // PowerShell
  if (lang === 'powershell' || lang === 'ps1') {
    if (['cmake', 'python', 'pip', 'git', 'cd', 'mkdir', 'Set-ExecutionPolicy', 'Get-Process', 'Invoke-WebRequest'].includes(token)) {
      return <span key={index} className="text-[#D6B98C] font-semibold">{token}</span>;
    }
    if (['build', 'clone', 'install', 'run'].includes(token)) {
      return <span key={index} className="text-[#D4A72C]">{token}</span>;
    }
    if (token.startsWith('-')) {
      return <span key={index} className="text-[#C98B5B]">{token}</span>;
    }
    if (token.includes('.ps1') || token.includes('.exe') || token.startsWith('.\\') || token.startsWith('./')) {
      return <span key={index} className="text-[#C98B5B]">{token}</span>;
    }
  }

  // Python
  if (lang === 'python' || lang === 'py') {
    if (['def', 'class', 'import', 'from', 'return', 'if', 'else', 'elif', 'for', 'in', 'while', 'with', 'as', 'try', 'except', 'raise', 'async', 'await', 'None', 'True', 'False'].includes(token)) {
      return <span key={index} className="text-[#D4A72C] font-semibold">{token}</span>;
    }
    if (['print', 'len', 'range', 'dict', 'list', 'set', 'str', 'int', 'float'].includes(token) || token.startsWith('@')) {
      return <span key={index} className="text-[#D6B98C]">{token}</span>;
    }
  }

  // JS / JSX / TS
  if (lang === 'javascript' || lang === 'js' || lang === 'jsx' || lang === 'typescript' || lang === 'ts') {
    if (['import', 'export', 'default', 'from', 'const', 'let', 'var', 'function', 'return', 'if', 'else', 'async', 'await'].includes(token)) {
      return <span key={index} className="text-[#D4A72C] font-semibold">{token}</span>;
    }
    if (token.startsWith('<') || token.startsWith('</') || token.endsWith('>')) {
      return <span key={index} className="text-[#D6B98C]">{token}</span>;
    }
  }

  // JSON
  if (lang === 'json') {
    if (token.endsWith(':')) {
      return <span key={index} className="text-[#D6B98C]">{token}</span>;
    }
    if (['true', 'false', 'null'].includes(token) || /^\d+$/.test(token)) {
      return <span key={index} className="text-[#D4A72C]">{token}</span>;
    }
  }

  // Text / Log Output
  if (lang === 'text' || lang === 'plain') {
    if (['[1/2]', '[2/2]', '[OK]', 'LIVE', 'CONNECTED', 'Docs', 'Terminal'].includes(token)) {
      return <span key={index} className="text-[#D4A72C] font-semibold">{token}</span>;
    }
    if (token === '->' || token === '=>') {
      return <span key={index} className="text-[#D6B98C] font-bold">{token}</span>;
    }
    if (token.includes('.jocky') || token.includes('.json') || token.includes('.enc')) {
      return <span key={index} className="text-[#C98B5B]">{token}</span>;
    }
  }

  // Numbers
  if (/^[0-9]+(\.[0-9]+)?$/.test(token)) {
    return <span key={index} className="text-[#D4A72C]">{token}</span>;
  }

  // Punctuation
  if (['{', '}', '(', ')', '[', ']', ';', ',', '.', ':', '=', '+', '-', '*', '/'].includes(token)) {
    return <span key={index} className="text-[#8F8778]">{token}</span>;
  }

  // Default text
  return <span key={index} className="text-[#E5E1D8]">{token}</span>;
}

export function highlightLine(line, language = 'jocky') {
  if (line === undefined || line === null) return '';
  if (line === '') return '\n';
  const tokenRegex = /("[^"]*"|'[^']*'|`[^`]*`|\/\/[^\n]*|\/\*[\s\S]*?\*\/|#[^\n]*|\b[A-Za-z_][A-Za-z0-9_.-]*\b|->|=>|==|!=|\.\/|\.\\|[{}()\[\]=;,.:+\-*\/]|[^\s"A-Za-z0-9_{}()\[\]=;,.:+\-*\/]+|\s+)/g;
  const matches = line.match(tokenRegex) || [line];
  return matches.map((token, i) => highlightToken(token, i, language));
}
