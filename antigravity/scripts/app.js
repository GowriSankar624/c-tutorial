/* ============================================================
   C TUTORIAL — APP LOGIC
   Navigation, routing, content rendering, quiz engine
   ============================================================ */

'use strict';

/* ===== TOPIC DATA ===== */
const TOPICS = [
  {
    id: 'intro',
    title: 'Introduction to C',
    icon: '🚀',
    difficulty: 'beginner',
    desc: 'History, uses, and why C matters in modern programming.',
    time: '10 min',
  },
  {
    id: 'syntax',
    title: 'Basic Syntax & Structure',
    icon: '🏗️',
    difficulty: 'beginner',
    desc: 'Hello World, comments, compilation, and program structure.',
    time: '12 min',
  },
  {
    id: 'variables',
    title: 'Variables & Data Types',
    icon: '📦',
    difficulty: 'beginner',
    desc: 'int, float, char, double — storage, sizes, and usage.',
    time: '15 min',
  },
  {
    id: 'operators',
    title: 'Operators',
    icon: '⚙️',
    difficulty: 'beginner',
    desc: 'Arithmetic, relational, logical, bitwise operators.',
    time: '12 min',
  },
  {
    id: 'control',
    title: 'Control Flow',
    icon: '🔀',
    difficulty: 'beginner',
    desc: 'if/else, switch, for, while, do-while loops.',
    time: '18 min',
  },
  {
    id: 'functions',
    title: 'Functions',
    icon: '🔧',
    difficulty: 'intermediate',
    desc: 'Declaring, defining, calling, and recursion.',
    time: '20 min',
  },
  {
    id: 'arrays',
    title: 'Arrays',
    icon: '📋',
    difficulty: 'intermediate',
    desc: '1D, 2D arrays, multi-dimensional arrays.',
    time: '16 min',
  },
  {
    id: 'pointers',
    title: 'Pointers',
    icon: '🎯',
    difficulty: 'advanced',
    desc: 'Pointer basics, arithmetic, pointers & arrays.',
    time: '25 min',
  },
  {
    id: 'strings',
    title: 'Strings',
    icon: '📝',
    difficulty: 'intermediate',
    desc: 'String operations, library functions, manipulation.',
    time: '15 min',
  },
  {
    id: 'structs',
    title: 'Structures & Unions',
    icon: '🏛️',
    difficulty: 'intermediate',
    desc: 'Custom data types, nested structs, unions.',
    time: '18 min',
  },
  {
    id: 'fileio',
    title: 'File I/O',
    icon: '📁',
    difficulty: 'intermediate',
    desc: 'Reading, writing, and manipulating files in C.',
    time: '20 min',
  },
  {
    id: 'memory',
    title: 'Dynamic Memory',
    icon: '💾',
    difficulty: 'advanced',
    desc: 'malloc, calloc, realloc, free — heap management.',
    time: '22 min',
  },
];

/* ===== TUTORIAL CONTENT ===== */
const CONTENT = {

  intro: {
    title: 'Introduction to C',
    sections: [
      {
        heading: 'What is C?',
        body: `<p class="concept-text">C is a <strong>general-purpose, procedural programming language</strong> developed in the early 1970s by <strong>Dennis Ritchie</strong> at Bell Labs. It is one of the most widely used programming languages of all time.</p>
        <p class="concept-text">C was originally designed to develop the <strong>UNIX operating system</strong>. Today it forms the backbone of operating systems (Linux, Windows), embedded systems, databases, and countless other applications.</p>
        <div class="info-box note"><strong>📌 Did you know?</strong> The Linux kernel, Python interpreter, and many browsers are written in C or C++!</div>`,
      },
      {
        heading: 'Why Learn C?',
        body: `<p class="concept-text">Learning C gives you a deep understanding of how computers work at a low level. Here's why C is still essential:</p>
        <ul class="concept-text" style="margin-left:1.5rem">
          <li>⚡ <strong>Fast & Efficient</strong> — Direct hardware access, no garbage collector</li>
          <li>🧠 <strong>Teaches Memory Management</strong> — You control every byte</li>
          <li>🌐 <strong>Universally Supported</strong> — Runs on every platform</li>
          <li>🔗 <strong>Foundation for C++, Java, Python</strong> — Their syntax descends from C</li>
          <li>💼 <strong>High Demand</strong> — Embedded systems, OS dev, game engines</li>
        </ul>
        <div class="info-box tip"><strong>💡 Tip:</strong> If you master C, picking up any other language becomes much easier!</div>`,
      },
      {
        heading: 'Setting Up Your Environment',
        body: `<p class="concept-text">To write and run C programs you need a <strong>compiler</strong>. The most popular is <strong>GCC (GNU Compiler Collection)</strong>.</p>
        <h3 class="concept-subheading">Installation</h3>
        <div class="code-block"><div class="code-header"><span class="code-lang">Terminal</span><button class="copy-btn" onclick="copyCode(this)">📋 Copy</button></div><pre>
<span class="tok-comment"># Windows: Install MinGW or use WSL</span>
winget install GnuWin32.Make

<span class="tok-comment"># Ubuntu / Debian Linux</span>
sudo apt-get install gcc

<span class="tok-comment"># macOS</span>
xcode-select --install
</pre></div>
        <p class="concept-text">You can also use online compilers like <strong>repl.it</strong>, <strong>OnlineGDB</strong>, or <strong>Compiler Explorer</strong> to get started instantly without installing anything.</p>`,
      },
    ],
    quiz: [
      {
        q: 'Who created the C programming language?',
        options: ['Linus Torvalds', 'Dennis Ritchie', 'Bjarne Stroustrup', 'James Gosling'],
        answer: 1,
        explanation: 'Dennis Ritchie developed C at Bell Labs in the early 1970s.',
      },
      {
        q: 'What was C originally designed to develop?',
        options: ['Microsoft Windows', 'macOS', 'UNIX operating system', 'The internet'],
        answer: 2,
        explanation: 'C was created to develop the UNIX operating system at Bell Labs.',
      },
    ],
  },

  syntax: {
    title: 'Basic Syntax & Structure',
    sections: [
      {
        heading: 'Your First C Program',
        body: `<p class="concept-text">Every C program starts with a <code class="inline">main()</code> function. Let's break down the classic "Hello, World!" program:</p>
        <div class="code-block"><div class="code-header"><span class="code-lang">C</span><button class="copy-btn" onclick="copyCode(this)">📋 Copy</button></div><pre>
<span class="tok-macro">#include</span> <span class="tok-string">&lt;stdio.h&gt;</span>   <span class="tok-comment">// Include standard input/output library</span>

<span class="tok-type">int</span> <span class="tok-function">main</span>() {             <span class="tok-comment">// Main function — program starts here</span>
    <span class="tok-function">printf</span>(<span class="tok-string">"Hello, World!\n"</span>);  <span class="tok-comment">// Print to screen</span>
    <span class="tok-keyword">return</span> <span class="tok-number">0</span>;              <span class="tok-comment">// Exit with success code</span>
}
</pre></div>
        <div class="info-box note"><strong>📌 Line by Line:</strong><br>
        • <code class="inline">#include &lt;stdio.h&gt;</code> — Imports functions like printf<br>
        • <code class="inline">int main()</code> — Entry point of every C program<br>
        • <code class="inline">printf()</code> — Prints formatted text to console<br>
        • <code class="inline">return 0</code> — Tells the OS the program ran successfully</div>`,
      },
      {
        heading: 'Comments',
        body: `<p class="concept-text">Comments are notes in your code that are <strong>ignored by the compiler</strong>. They help explain what the code does.</p>
        <div class="code-block"><div class="code-header"><span class="code-lang">C</span><button class="copy-btn" onclick="copyCode(this)">📋 Copy</button></div><pre>
<span class="tok-comment">// This is a single-line comment</span>

<span class="tok-comment">/* This is a
   multi-line comment */</span>

<span class="tok-type">int</span> age = <span class="tok-number">20</span>;  <span class="tok-comment">// Inline comment</span>
</pre></div>`,
      },
      {
        heading: 'Compilation & Execution',
        body: `<p class="concept-text">C is a <strong>compiled language</strong>. You write source code → the compiler converts it to machine code → you run the executable.</p>
        <div class="code-block"><div class="code-header"><span class="code-lang">Terminal</span><button class="copy-btn" onclick="copyCode(this)">📋 Copy</button></div><pre>
<span class="tok-comment"># Step 1: Compile</span>
gcc hello.c -o hello

<span class="tok-comment"># Step 2: Run</span>
./hello

<span class="tok-comment"># Output:</span>
Hello, World!
</pre></div>
        <div class="info-box tip"><strong>💡 Flags:</strong> Use <code class="inline">gcc -Wall hello.c -o hello</code> to enable all warnings. Always compile with warnings enabled!</div>`,
      },
    ],
    quiz: [
      {
        q: 'What does #include <stdio.h> do?',
        options: ['Defines the main function', 'Imports standard I/O functions like printf', 'Allocates memory', 'Runs the program'],
        answer: 1,
        explanation: '#include <stdio.h> imports the standard input/output library, giving access to functions like printf and scanf.',
      },
      {
        q: 'What value does main() return on success?',
        options: ['1', '-1', '0', 'NULL'],
        answer: 2,
        explanation: 'main() returns 0 to signal successful program execution to the operating system.',
      },
    ],
  },

  variables: {
    title: 'Variables & Data Types',
    sections: [
      {
        heading: 'What are Variables?',
        body: `<p class="concept-text">A <strong>variable</strong> is a named storage location in memory that holds a value. Before using a variable in C, you must <strong>declare</strong> its type.</p>
        <div class="code-block"><div class="code-header"><span class="code-lang">C</span><button class="copy-btn" onclick="copyCode(this)">📋 Copy</button></div><pre>
<span class="tok-type">int</span> age = <span class="tok-number">20</span>;           <span class="tok-comment">// integer</span>
<span class="tok-type">float</span> price = <span class="tok-number">9.99</span>;     <span class="tok-comment">// floating point</span>
<span class="tok-type">char</span> grade = <span class="tok-string">'A'</span>;      <span class="tok-comment">// single character</span>
<span class="tok-type">double</span> pi = <span class="tok-number">3.14159</span>;  <span class="tok-comment">// double precision float</span>
</pre></div>`,
      },
      {
        heading: 'Data Types Overview',
        body: `<p class="concept-text">C provides several <strong>primitive data types</strong>. Each has a fixed size in memory:</p>
        <table class="data-table">
          <thead><tr><th>Type</th><th>Size</th><th>Range</th><th>Example</th></tr></thead>
          <tbody>
            <tr><td><code>int</code></td><td>4 bytes</td><td>-2,147,483,648 to 2,147,483,647</td><td><code>int x = 10;</code></td></tr>
            <tr><td><code>char</code></td><td>1 byte</td><td>-128 to 127</td><td><code>char c = 'A';</code></td></tr>
            <tr><td><code>float</code></td><td>4 bytes</td><td>±3.4 × 10³⁸</td><td><code>float f = 3.14f;</code></td></tr>
            <tr><td><code>double</code></td><td>8 bytes</td><td>±1.7 × 10³⁰⁸</td><td><code>double d = 3.14;</code></td></tr>
            <tr><td><code>long</code></td><td>8 bytes</td><td>Very large integers</td><td><code>long l = 100000L;</code></td></tr>
            <tr><td><code>short</code></td><td>2 bytes</td><td>-32,768 to 32,767</td><td><code>short s = 100;</code></td></tr>
          </tbody>
        </table>
        <img src="../images/memory_diagram.jpg" alt="Memory Layout Diagram" class="concept-image">
        <p class="concept-text" style="font-size:0.82rem;color:var(--text-muted);margin-top:-0.5rem">↑ How variables are stored at memory addresses</p>`,
      },
      {
        heading: 'Format Specifiers',
        body: `<p class="concept-text">When using <code class="inline">printf</code> and <code class="inline">scanf</code>, you need <strong>format specifiers</strong> to match data types:</p>
        <div class="code-block"><div class="code-header"><span class="code-lang">C</span><button class="copy-btn" onclick="copyCode(this)">📋 Copy</button></div><pre>
<span class="tok-macro">#include</span> <span class="tok-string">&lt;stdio.h&gt;</span>

<span class="tok-type">int</span> <span class="tok-function">main</span>() {
    <span class="tok-type">int</span> age = <span class="tok-number">20</span>;
    <span class="tok-type">float</span> gpa = <span class="tok-number">3.8f</span>;
    <span class="tok-type">char</span> grade = <span class="tok-string">'A'</span>;

    <span class="tok-function">printf</span>(<span class="tok-string">"Age: %d\n"</span>, age);     <span class="tok-comment">// %d for int</span>
    <span class="tok-function">printf</span>(<span class="tok-string">"GPA: %.1f\n"</span>, gpa);   <span class="tok-comment">// %f for float</span>
    <span class="tok-function">printf</span>(<span class="tok-string">"Grade: %c\n"</span>, grade); <span class="tok-comment">// %c for char</span>
    <span class="tok-keyword">return</span> <span class="tok-number">0</span>;
}
</pre></div>
        <div class="info-box warning"><strong>⚠️ Type Mismatch:</strong> Using the wrong format specifier causes undefined behavior. Always match types carefully!</div>`,
      },
    ],
    quiz: [
      {
        q: 'How many bytes does an int typically occupy?',
        options: ['1 byte', '2 bytes', '4 bytes', '8 bytes'],
        answer: 2,
        explanation: 'An int typically occupies 4 bytes (32 bits) on modern systems.',
      },
      {
        q: 'What format specifier is used for float in printf?',
        options: ['%d', '%c', '%s', '%f'],
        answer: 3,
        explanation: '%f is the format specifier for float and double in printf/scanf.',
      },
    ],
  },

  operators: {
    title: 'Operators',
    sections: [
      {
        heading: 'Arithmetic Operators',
        body: `<p class="concept-text">Arithmetic operators perform <strong>mathematical operations</strong> on numeric values:</p>
        <div class="op-grid">
          <div class="op-item"><span class="op-symbol">+</span><div><div style="font-weight:600;font-size:.85rem">Addition</div><div class="op-name">a + b</div></div></div>
          <div class="op-item"><span class="op-symbol">-</span><div><div style="font-weight:600;font-size:.85rem">Subtraction</div><div class="op-name">a - b</div></div></div>
          <div class="op-item"><span class="op-symbol">*</span><div><div style="font-weight:600;font-size:.85rem">Multiplication</div><div class="op-name">a * b</div></div></div>
          <div class="op-item"><span class="op-symbol">/</span><div><div style="font-weight:600;font-size:.85rem">Division</div><div class="op-name">a / b</div></div></div>
          <div class="op-item"><span class="op-symbol">%</span><div><div style="font-weight:600;font-size:.85rem">Modulo</div><div class="op-name">a % b (remainder)</div></div></div>
          <div class="op-item"><span class="op-symbol">++</span><div><div style="font-weight:600;font-size:.85rem">Increment</div><div class="op-name">a++ or ++a</div></div></div>
          <div class="op-item"><span class="op-symbol">--</span><div><div style="font-weight:600;font-size:.85rem">Decrement</div><div class="op-name">a-- or --a</div></div></div>
        </div>
        <div class="code-block"><div class="code-header"><span class="code-lang">C</span><button class="copy-btn" onclick="copyCode(this)">📋 Copy</button></div><pre>
<span class="tok-type">int</span> a = <span class="tok-number">10</span>, b = <span class="tok-number">3</span>;
<span class="tok-function">printf</span>(<span class="tok-string">"%d\n"</span>, a + b);   <span class="tok-comment">// 13</span>
<span class="tok-function">printf</span>(<span class="tok-string">"%d\n"</span>, a - b);   <span class="tok-comment">// 7</span>
<span class="tok-function">printf</span>(<span class="tok-string">"%d\n"</span>, a * b);   <span class="tok-comment">// 30</span>
<span class="tok-function">printf</span>(<span class="tok-string">"%d\n"</span>, a / b);   <span class="tok-comment">// 3 (integer division!)</span>
<span class="tok-function">printf</span>(<span class="tok-string">"%d\n"</span>, a % b);   <span class="tok-comment">// 1 (remainder)</span>
</pre></div>`,
      },
      {
        heading: 'Relational & Logical Operators',
        body: `<p class="concept-text"><strong>Relational operators</strong> compare values and return 1 (true) or 0 (false):</p>
        <table class="data-table">
          <thead><tr><th>Operator</th><th>Meaning</th><th>Example</th><th>Result</th></tr></thead>
          <tbody>
            <tr><td><code>==</code></td><td>Equal to</td><td><code>5 == 5</code></td><td>1 (true)</td></tr>
            <tr><td><code>!=</code></td><td>Not equal</td><td><code>5 != 3</code></td><td>1 (true)</td></tr>
            <tr><td><code>&gt;</code></td><td>Greater than</td><td><code>5 &gt; 3</code></td><td>1 (true)</td></tr>
            <tr><td><code>&lt;</code></td><td>Less than</td><td><code>2 &lt; 3</code></td><td>1 (true)</td></tr>
            <tr><td><code>&gt;=</code></td><td>Greater or equal</td><td><code>5 &gt;= 5</code></td><td>1 (true)</td></tr>
            <tr><td><code>&lt;=</code></td><td>Less or equal</td><td><code>2 &lt;= 3</code></td><td>1 (true)</td></tr>
          </tbody>
        </table>
        <p class="concept-text" style="margin-top:1rem"><strong>Logical operators</strong> combine conditions:</p>
        <div class="code-block"><div class="code-header"><span class="code-lang">C</span><button class="copy-btn" onclick="copyCode(this)">📋 Copy</button></div><pre>
<span class="tok-type">int</span> a = <span class="tok-number">5</span>, b = <span class="tok-number">3</span>, c = <span class="tok-number">7</span>;

<span class="tok-comment">// && (AND) — both must be true</span>
<span class="tok-function">printf</span>(<span class="tok-string">"%d\n"</span>, a > b && b < c);  <span class="tok-comment">// 1 (true)</span>

<span class="tok-comment">// || (OR) — at least one must be true</span>
<span class="tok-function">printf</span>(<span class="tok-string">"%d\n"</span>, a < b || b < c);  <span class="tok-comment">// 1 (true)</span>

<span class="tok-comment">// ! (NOT) — reverses the truth value</span>
<span class="tok-function">printf</span>(<span class="tok-string">"%d\n"</span>, !(a > b));         <span class="tok-comment">// 0 (false)</span>
</pre></div>`,
      },
    ],
    quiz: [
      {
        q: 'What is the result of 10 % 3 in C?',
        options: ['3', '1', '0', '3.33'],
        answer: 1,
        explanation: 'The % operator returns the remainder. 10 divided by 3 is 3 remainder 1, so 10 % 3 = 1.',
      },
      {
        q: 'What does the == operator do?',
        options: ['Assigns a value', 'Compares for equality', 'Not equal', 'Division'],
        answer: 1,
        explanation: '== checks if two values are equal, returning 1 (true) or 0 (false). Do not confuse with = (assignment).',
      },
    ],
  },

  control: {
    title: 'Control Flow',
    sections: [
      {
        heading: 'if / else Statement',
        body: `<p class="concept-text">The <strong>if statement</strong> executes code only when a condition is true. The <strong>else</strong> block runs when the condition is false.</p>
        <img src="../images/control_flow.jpg" alt="Control Flow Diagram" class="concept-image">
        <div class="code-block"><div class="code-header"><span class="code-lang">C</span><button class="copy-btn" onclick="copyCode(this)">📋 Copy</button></div><pre>
<span class="tok-type">int</span> score = <span class="tok-number">75</span>;

<span class="tok-keyword">if</span> (score >= <span class="tok-number">90</span>) {
    <span class="tok-function">printf</span>(<span class="tok-string">"Grade: A\n"</span>);
} <span class="tok-keyword">else if</span> (score >= <span class="tok-number">70</span>) {
    <span class="tok-function">printf</span>(<span class="tok-string">"Grade: B\n"</span>);  <span class="tok-comment">// This runs!</span>
} <span class="tok-keyword">else if</span> (score >= <span class="tok-number">50</span>) {
    <span class="tok-function">printf</span>(<span class="tok-string">"Grade: C\n"</span>);
} <span class="tok-keyword">else</span> {
    <span class="tok-function">printf</span>(<span class="tok-string">"Grade: F\n"</span>);
}
</pre></div>`,
      },
      {
        heading: 'Loops — for, while, do-while',
        body: `<p class="concept-text">Loops repeat a block of code multiple times. C has three types:</p>
        <h3 class="concept-subheading">for loop — when you know iteration count</h3>
        <div class="code-block"><div class="code-header"><span class="code-lang">C</span><button class="copy-btn" onclick="copyCode(this)">📋 Copy</button></div><pre>
<span class="tok-comment">// Prints 0 to 4</span>
<span class="tok-keyword">for</span> (<span class="tok-type">int</span> i = <span class="tok-number">0</span>; i < <span class="tok-number">5</span>; i++) {
    <span class="tok-function">printf</span>(<span class="tok-string">"%d "</span>, i);
}
<span class="tok-comment">// Output: 0 1 2 3 4</span>
</pre></div>
        <h3 class="concept-subheading">while loop — repeat while condition is true</h3>
        <div class="code-block"><div class="code-header"><span class="code-lang">C</span><button class="copy-btn" onclick="copyCode(this)">📋 Copy</button></div><pre>
<span class="tok-type">int</span> n = <span class="tok-number">1</span>;
<span class="tok-keyword">while</span> (n <= <span class="tok-number">5</span>) {
    <span class="tok-function">printf</span>(<span class="tok-string">"%d "</span>, n);
    n++;
}
<span class="tok-comment">// Output: 1 2 3 4 5</span>
</pre></div>
        <h3 class="concept-subheading">do-while loop — runs at least once</h3>
        <div class="code-block"><div class="code-header"><span class="code-lang">C</span><button class="copy-btn" onclick="copyCode(this)">📋 Copy</button></div><pre>
<span class="tok-type">int</span> n = <span class="tok-number">1</span>;
<span class="tok-keyword">do</span> {
    <span class="tok-function">printf</span>(<span class="tok-string">"%d "</span>, n);
    n++;
} <span class="tok-keyword">while</span> (n <= <span class="tok-number">5</span>);
<span class="tok-comment">// Output: 1 2 3 4 5</span>
</pre></div>
        <div class="info-box tip"><strong>💡 Key Difference:</strong> A do-while loop always executes its body <em>at least once</em>, even if the condition is initially false.</div>`,
      },
      {
        heading: 'switch Statement',
        body: `<p class="concept-text">The <strong>switch</strong> statement is a cleaner way to handle multiple conditions based on a single variable's value:</p>
        <div class="code-block"><div class="code-header"><span class="code-lang">C</span><button class="copy-btn" onclick="copyCode(this)">📋 Copy</button></div><pre>
<span class="tok-type">int</span> day = <span class="tok-number">3</span>;
<span class="tok-keyword">switch</span> (day) {
    <span class="tok-keyword">case</span> <span class="tok-number">1</span>: <span class="tok-function">printf</span>(<span class="tok-string">"Monday\n"</span>); <span class="tok-keyword">break</span>;
    <span class="tok-keyword">case</span> <span class="tok-number">2</span>: <span class="tok-function">printf</span>(<span class="tok-string">"Tuesday\n"</span>); <span class="tok-keyword">break</span>;
    <span class="tok-keyword">case</span> <span class="tok-number">3</span>: <span class="tok-function">printf</span>(<span class="tok-string">"Wednesday\n"</span>); <span class="tok-keyword">break</span>; <span class="tok-comment">// This runs!</span>
    <span class="tok-keyword">default</span>: <span class="tok-function">printf</span>(<span class="tok-string">"Unknown\n"</span>);
}
</pre></div>
        <div class="info-box warning"><strong>⚠️ Don't forget break!</strong> Without <code class="inline">break</code>, execution "falls through" to the next case, which is usually unintended.</div>`,
      },
    ],
    quiz: [
      {
        q: 'Which loop always executes its body at least once?',
        options: ['for loop', 'while loop', 'do-while loop', 'switch'],
        answer: 2,
        explanation: 'A do-while loop checks its condition AFTER the body runs, so it always executes at least once.',
      },
      {
        q: 'What keyword is used to exit a switch case?',
        options: ['exit', 'return', 'break', 'continue'],
        answer: 2,
        explanation: 'The break keyword exits the switch statement. Without it, execution falls through to subsequent cases.',
      },
    ],
  },

  functions: {
    title: 'Functions',
    sections: [
      {
        heading: 'What is a Function?',
        body: `<p class="concept-text">A <strong>function</strong> is a reusable block of code that performs a specific task. Functions help you organize code, avoid repetition, and make programs easier to understand.</p>
        <div class="code-block"><div class="code-header"><span class="code-lang">C</span><button class="copy-btn" onclick="copyCode(this)">📋 Copy</button></div><pre>
<span class="tok-comment">// Function declaration (prototype)</span>
<span class="tok-type">int</span> <span class="tok-function">add</span>(<span class="tok-type">int</span> a, <span class="tok-type">int</span> b);

<span class="tok-type">int</span> <span class="tok-function">main</span>() {
    <span class="tok-type">int</span> result = <span class="tok-function">add</span>(<span class="tok-number">5</span>, <span class="tok-number">3</span>);   <span class="tok-comment">// Function call</span>
    <span class="tok-function">printf</span>(<span class="tok-string">"Sum: %d\n"</span>, result);  <span class="tok-comment">// Output: Sum: 8</span>
    <span class="tok-keyword">return</span> <span class="tok-number">0</span>;
}

<span class="tok-comment">// Function definition</span>
<span class="tok-type">int</span> <span class="tok-function">add</span>(<span class="tok-type">int</span> a, <span class="tok-type">int</span> b) {
    <span class="tok-keyword">return</span> a + b;
}
</pre></div>
        <div class="info-box note"><strong>📌 Parts of a function:</strong><br>
        • <strong>Return type</strong> — what type of value it returns (int, void, etc.)<br>
        • <strong>Name</strong> — the function's identifier<br>
        • <strong>Parameters</strong> — inputs it receives<br>
        • <strong>Body</strong> — the code that runs<br>
        • <strong>return</strong> — value sent back to the caller</div>`,
      },
      {
        heading: 'Recursion',
        body: `<p class="concept-text"><strong>Recursion</strong> is when a function calls itself to solve a problem. Each call solves a smaller version until reaching the <strong>base case</strong>.</p>
        <div class="code-block"><div class="code-header"><span class="code-lang">C</span><button class="copy-btn" onclick="copyCode(this)">📋 Copy</button></div><pre>
<span class="tok-comment">// Factorial using recursion</span>
<span class="tok-comment">// 5! = 5 × 4 × 3 × 2 × 1 = 120</span>
<span class="tok-type">int</span> <span class="tok-function">factorial</span>(<span class="tok-type">int</span> n) {
    <span class="tok-keyword">if</span> (n == <span class="tok-number">0</span>) <span class="tok-keyword">return</span> <span class="tok-number">1</span>;  <span class="tok-comment">// Base case</span>
    <span class="tok-keyword">return</span> n * <span class="tok-function">factorial</span>(n - <span class="tok-number">1</span>);  <span class="tok-comment">// Recursive call</span>
}

<span class="tok-type">int</span> <span class="tok-function">main</span>() {
    <span class="tok-function">printf</span>(<span class="tok-string">"%d\n"</span>, <span class="tok-function">factorial</span>(<span class="tok-number">5</span>));  <span class="tok-comment">// 120</span>
    <span class="tok-keyword">return</span> <span class="tok-number">0</span>;
}
</pre></div>
        <div class="info-box warning"><strong>⚠️ Always define a base case!</strong> Without it, recursion runs forever and causes a stack overflow.</div>`,
      },
    ],
    quiz: [
      {
        q: 'What must every recursive function have?',
        options: ['A loop', 'A base case', 'A pointer', 'A struct'],
        answer: 1,
        explanation: 'A base case stops the recursion. Without it, the function calls itself infinitely, causing a stack overflow.',
      },
      {
        q: 'What return type should a function have if it returns nothing?',
        options: ['int', 'null', 'void', 'empty'],
        answer: 2,
        explanation: 'The void return type is used for functions that do not return a value.',
      },
    ],
  },

  arrays: {
    title: 'Arrays',
    sections: [
      {
        heading: 'What is an Array?',
        body: `<p class="concept-text">An <strong>array</strong> is a collection of elements of the <em>same data type</em> stored in <strong>contiguous memory locations</strong>. Each element is accessed by its <strong>index</strong> (starting from 0).</p>
        <div class="array-visual">
          <div class="array-cell"><div class="array-val">10</div><div class="array-idx">[0]</div></div>
          <div class="array-cell"><div class="array-val">20</div><div class="array-idx">[1]</div></div>
          <div class="array-cell"><div class="array-val">30</div><div class="array-idx">[2]</div></div>
          <div class="array-cell"><div class="array-val">40</div><div class="array-idx">[3]</div></div>
          <div class="array-cell"><div class="array-val">50</div><div class="array-idx">[4]</div></div>
        </div>
        <div class="code-block"><div class="code-header"><span class="code-lang">C</span><button class="copy-btn" onclick="copyCode(this)">📋 Copy</button></div><pre>
<span class="tok-comment">// Declare and initialize an array</span>
<span class="tok-type">int</span> nums[<span class="tok-number">5</span>] = {<span class="tok-number">10</span>, <span class="tok-number">20</span>, <span class="tok-number">30</span>, <span class="tok-number">40</span>, <span class="tok-number">50</span>};

<span class="tok-comment">// Access elements by index</span>
<span class="tok-function">printf</span>(<span class="tok-string">"%d\n"</span>, nums[<span class="tok-number">0</span>]);  <span class="tok-comment">// 10</span>
<span class="tok-function">printf</span>(<span class="tok-string">"%d\n"</span>, nums[<span class="tok-number">2</span>]);  <span class="tok-comment">// 30</span>
<span class="tok-function">printf</span>(<span class="tok-string">"%d\n"</span>, nums[<span class="tok-number">4</span>]);  <span class="tok-comment">// 50</span>
</pre></div>`,
      },
      {
        heading: '2D Arrays',
        body: `<p class="concept-text">A <strong>2D array</strong> is like a table with rows and columns. It's useful for matrices and grids.</p>
        <div class="code-block"><div class="code-header"><span class="code-lang">C</span><button class="copy-btn" onclick="copyCode(this)">📋 Copy</button></div><pre>
<span class="tok-comment">// 3×3 matrix</span>
<span class="tok-type">int</span> matrix[<span class="tok-number">3</span>][<span class="tok-number">3</span>] = {
    {<span class="tok-number">1</span>, <span class="tok-number">2</span>, <span class="tok-number">3</span>},   <span class="tok-comment">// Row 0</span>
    {<span class="tok-number">4</span>, <span class="tok-number">5</span>, <span class="tok-number">6</span>},   <span class="tok-comment">// Row 1</span>
    {<span class="tok-number">7</span>, <span class="tok-number">8</span>, <span class="tok-number">9</span>}    <span class="tok-comment">// Row 2</span>
};

<span class="tok-function">printf</span>(<span class="tok-string">"%d\n"</span>, matrix[<span class="tok-number">1</span>][<span class="tok-number">2</span>]);  <span class="tok-comment">// Row 1, Col 2 = 6</span>

<span class="tok-comment">// Nested loops to print all elements</span>
<span class="tok-keyword">for</span> (<span class="tok-type">int</span> i = <span class="tok-number">0</span>; i < <span class="tok-number">3</span>; i++) {
    <span class="tok-keyword">for</span> (<span class="tok-type">int</span> j = <span class="tok-number">0</span>; j < <span class="tok-number">3</span>; j++) {
        <span class="tok-function">printf</span>(<span class="tok-string">"%d "</span>, matrix[i][j]);
    }
    <span class="tok-function">printf</span>(<span class="tok-string">"\n"</span>);
}
</pre></div>`,
      },
    ],
    quiz: [
      {
        q: 'What is the index of the first element in a C array?',
        options: ['1', '-1', '0', 'Depends on the type'],
        answer: 2,
        explanation: 'C arrays are zero-indexed, so the first element is always at index 0.',
      },
      {
        q: 'What happens if you access an array out of bounds?',
        options: ['Error message', 'Returns 0', 'Undefined behavior', 'Crashes always'],
        answer: 2,
        explanation: 'Accessing an array out of bounds causes undefined behavior in C — it may crash, corrupt data, or seem fine.',
      },
    ],
  },

  pointers: {
    title: 'Pointers',
    sections: [
      {
        heading: 'What is a Pointer?',
        body: `<p class="concept-text">A <strong>pointer</strong> is a variable that <strong>stores the memory address</strong> of another variable. Instead of holding a value directly, it points to where the value lives in memory.</p>
        <img src="../images/pointer_diagram.jpg" alt="Pointer Diagram" class="concept-image">
        <div class="code-block"><div class="code-header"><span class="code-lang">C</span><button class="copy-btn" onclick="copyCode(this)">📋 Copy</button></div><pre>
<span class="tok-type">int</span> x = <span class="tok-number">42</span>;          <span class="tok-comment">// Normal variable</span>
<span class="tok-type">int</span> *ptr = &x;      <span class="tok-comment">// ptr stores ADDRESS of x</span>

<span class="tok-function">printf</span>(<span class="tok-string">"%d\n"</span>, x);    <span class="tok-comment">// 42 (value of x)</span>
<span class="tok-function">printf</span>(<span class="tok-string">"%p\n"</span>, ptr);  <span class="tok-comment">// 0x... (address of x)</span>
<span class="tok-function">printf</span>(<span class="tok-string">"%d\n"</span>, *ptr); <span class="tok-comment">// 42 (value AT address — dereferencing)</span>
</pre></div>
        <div class="info-box note"><strong>📌 Key Operators:</strong><br>
        • <code class="inline">&amp;</code> (address-of) — gets the memory address of a variable<br>
        • <code class="inline">*</code> (dereference) — gets the value at the address stored in a pointer</div>`,
      },
      {
        heading: 'Pointer Arithmetic',
        body: `<p class="concept-text">You can perform arithmetic on pointers. When you increment a pointer, it moves by the <strong>size of the data type</strong> it points to.</p>
        <img src="../images/memory_diagram.jpg" alt="Memory Diagram" class="concept-image">
        <div class="code-block"><div class="code-header"><span class="code-lang">C</span><button class="copy-btn" onclick="copyCode(this)">📋 Copy</button></div><pre>
<span class="tok-type">int</span> arr[<span class="tok-number">3</span>] = {<span class="tok-number">10</span>, <span class="tok-number">20</span>, <span class="tok-number">30</span>};
<span class="tok-type">int</span> *ptr = arr;  <span class="tok-comment">// Points to arr[0]</span>

<span class="tok-function">printf</span>(<span class="tok-string">"%d\n"</span>, *ptr);      <span class="tok-comment">// 10</span>
ptr++;                      <span class="tok-comment">// Move to next int (4 bytes forward)</span>
<span class="tok-function">printf</span>(<span class="tok-string">"%d\n"</span>, *ptr);      <span class="tok-comment">// 20</span>
ptr++;
<span class="tok-function">printf</span>(<span class="tok-string">"%d\n"</span>, *ptr);      <span class="tok-comment">// 30</span>
</pre></div>`,
      },
    ],
    quiz: [
      {
        q: 'What does the & operator do in C?',
        options: ['Dereferences a pointer', 'Returns the memory address of a variable', 'Logical AND', 'Multiplies values'],
        answer: 1,
        explanation: 'The & (address-of) operator returns the memory address of a variable.',
      },
      {
        q: 'What does *ptr mean when ptr is a pointer?',
        options: ['Declares a pointer', 'Gets the address', 'Gets the value at the address (dereference)', 'Multiplies by ptr'],
        answer: 2,
        explanation: 'The * (dereference) operator accesses the value stored at the memory address held by the pointer.',
      },
    ],
  },

  strings: {
    title: 'Strings',
    sections: [
      {
        heading: 'Strings in C',
        body: `<p class="concept-text">In C, a <strong>string</strong> is an array of characters terminated by a <strong>null character</strong> (<code class="inline">\\0</code>). There is no built-in string type — strings are just <code class="inline">char</code> arrays.</p>
        <div class="array-visual">
          <div class="array-cell"><div class="array-val" style="color:#50fa7b">H</div><div class="array-idx">[0]</div></div>
          <div class="array-cell"><div class="array-val" style="color:#50fa7b">e</div><div class="array-idx">[1]</div></div>
          <div class="array-cell"><div class="array-val" style="color:#50fa7b">l</div><div class="array-idx">[2]</div></div>
          <div class="array-cell"><div class="array-val" style="color:#50fa7b">l</div><div class="array-idx">[3]</div></div>
          <div class="array-cell"><div class="array-val" style="color:#50fa7b">o</div><div class="array-idx">[4]</div></div>
          <div class="array-cell"><div class="array-val" style="color:#ff79c6">\\0</div><div class="array-idx">[5]</div></div>
        </div>
        <div class="code-block"><div class="code-header"><span class="code-lang">C</span><button class="copy-btn" onclick="copyCode(this)">📋 Copy</button></div><pre>
<span class="tok-type">char</span> name[] = <span class="tok-string">"Hello"</span>;  <span class="tok-comment">// Auto adds \0 at end</span>
<span class="tok-function">printf</span>(<span class="tok-string">"%s\n"</span>, name);   <span class="tok-comment">// Output: Hello</span>
<span class="tok-function">printf</span>(<span class="tok-string">"%c\n"</span>, name[<span class="tok-number">0</span>]); <span class="tok-comment">// Output: H</span>
</pre></div>`,
      },
      {
        heading: 'String Functions (string.h)',
        body: `<p class="concept-text">The <code class="inline">&lt;string.h&gt;</code> library provides handy string manipulation functions:</p>
        <div class="code-block"><div class="code-header"><span class="code-lang">C</span><button class="copy-btn" onclick="copyCode(this)">📋 Copy</button></div><pre>
<span class="tok-macro">#include</span> <span class="tok-string">&lt;string.h&gt;</span>
<span class="tok-macro">#include</span> <span class="tok-string">&lt;stdio.h&gt;</span>

<span class="tok-type">char</span> s1[<span class="tok-number">20</span>] = <span class="tok-string">"Hello"</span>;
<span class="tok-type">char</span> s2[] = <span class="tok-string">" World"</span>;

<span class="tok-function">strlen</span>(s1);          <span class="tok-comment">// 5 — length of string</span>
<span class="tok-function">strcat</span>(s1, s2);     <span class="tok-comment">// "Hello World" — concatenate</span>
<span class="tok-function">strcpy</span>(s1, <span class="tok-string">"Hi"</span>);  <span class="tok-comment">// copies "Hi" into s1</span>
<span class="tok-function">strcmp</span>(s1, s2);     <span class="tok-comment">// 0 if equal, ≠0 if different</span>
<span class="tok-function">strupr</span>(s1);         <span class="tok-comment">// HELLO — uppercase (non-standard)</span>
</pre></div>
        <div class="info-box warning"><strong>⚠️ Buffer Safety:</strong> Always make sure destination arrays are large enough before using <code class="inline">strcat</code> or <code class="inline">strcpy</code> to avoid buffer overflows!</div>`,
      },
    ],
    quiz: [
      {
        q: 'What character marks the end of a string in C?',
        options: ["'.'", "'\\n'", "'\\0'", "'EOF'"],
        answer: 2,
        explanation: "Every C string ends with a null terminator '\\0' (ASCII 0). Without it, string functions won't know where the string ends.",
      },
      {
        q: 'Which function returns the length of a string?',
        options: ['strcat', 'strcpy', 'strlen', 'strcmp'],
        answer: 2,
        explanation: 'strlen() returns the number of characters in a string, not counting the null terminator.',
      },
    ],
  },

  structs: {
    title: 'Structures & Unions',
    sections: [
      {
        heading: 'Structures (struct)',
        body: `<p class="concept-text">A <strong>struct</strong> groups related variables of <em>different types</em> into a single unit — like a custom data type.</p>
        <div class="struct-visual">
          <div class="struct-field"><span class="field-type">char</span><span class="field-name">name[50]</span><span class="field-size">50 bytes</span></div>
          <div class="struct-field"><span class="field-type">int</span><span class="field-name">age</span><span class="field-size">4 bytes</span></div>
          <div class="struct-field"><span class="field-type">float</span><span class="field-name">gpa</span><span class="field-size">4 bytes</span></div>
        </div>
        <div class="code-block"><div class="code-header"><span class="code-lang">C</span><button class="copy-btn" onclick="copyCode(this)">📋 Copy</button></div><pre>
<span class="tok-keyword">struct</span> Student {
    <span class="tok-type">char</span> name[<span class="tok-number">50</span>];
    <span class="tok-type">int</span> age;
    <span class="tok-type">float</span> gpa;
};

<span class="tok-type">int</span> <span class="tok-function">main</span>() {
    <span class="tok-keyword">struct</span> Student s1;
    <span class="tok-function">strcpy</span>(s1.name, <span class="tok-string">"Alice"</span>);
    s1.age = <span class="tok-number">20</span>;
    s1.gpa = <span class="tok-number">3.9f</span>;

    <span class="tok-function">printf</span>(<span class="tok-string">"Name: %s\n"</span>, s1.name);
    <span class="tok-function">printf</span>(<span class="tok-string">"Age:  %d\n"</span>, s1.age);
    <span class="tok-function">printf</span>(<span class="tok-string">"GPA:  %.1f\n"</span>, s1.gpa);
    <span class="tok-keyword">return</span> <span class="tok-number">0</span>;
}
</pre></div>`,
      },
      {
        heading: 'typedef for cleaner syntax',
        body: `<p class="concept-text"><code class="inline">typedef</code> lets you create an alias for a type so you don't have to write <code class="inline">struct</code> every time:</p>
        <div class="code-block"><div class="code-header"><span class="code-lang">C</span><button class="copy-btn" onclick="copyCode(this)">📋 Copy</button></div><pre>
<span class="tok-keyword">typedef struct</span> {
    <span class="tok-type">char</span> name[<span class="tok-number">50</span>];
    <span class="tok-type">int</span> age;
    <span class="tok-type">float</span> gpa;
} Student;   <span class="tok-comment">// Now 'Student' is the type</span>

Student s1;  <span class="tok-comment">// No need to write 'struct Student'</span>
s1.age = <span class="tok-number">22</span>;
</pre></div>`,
      },
    ],
    quiz: [
      {
        q: 'What is the key difference between struct and union?',
        options: ['Structs are faster', 'Unions save memory by sharing storage for all members', 'Structs can only hold int', 'No difference'],
        answer: 1,
        explanation: 'In a union, all members share the same memory location. The union size equals the size of its largest member, making it memory-efficient.',
      },
      {
        q: 'How do you access a struct member?',
        options: ['Using ->', 'Using the dot (.) operator', 'Using *', 'Using []'],
        answer: 1,
        explanation: 'Use the dot (.) operator to access struct members when working with a struct variable directly. Use -> when using a pointer to a struct.',
      },
    ],
  },

  fileio: {
    title: 'File I/O',
    sections: [
      {
        heading: 'Working with Files',
        body: `<p class="concept-text">C allows you to <strong>read from and write to files</strong> using the <code class="inline">FILE</code> pointer and functions from <code class="inline">&lt;stdio.h&gt;</code>.</p>
        <div class="code-block"><div class="code-header"><span class="code-lang">C</span><button class="copy-btn" onclick="copyCode(this)">📋 Copy</button></div><pre>
<span class="tok-macro">#include</span> <span class="tok-string">&lt;stdio.h&gt;</span>

<span class="tok-type">int</span> <span class="tok-function">main</span>() {
    <span class="tok-comment">// Open file for writing</span>
    FILE *fp = <span class="tok-function">fopen</span>(<span class="tok-string">"data.txt"</span>, <span class="tok-string">"w"</span>);
    <span class="tok-keyword">if</span> (fp == NULL) {
        <span class="tok-function">printf</span>(<span class="tok-string">"Error opening file!\n"</span>);
        <span class="tok-keyword">return</span> <span class="tok-number">1</span>;
    }
    <span class="tok-function">fprintf</span>(fp, <span class="tok-string">"Hello, File!\n"</span>);  <span class="tok-comment">// Write to file</span>
    <span class="tok-function">fclose</span>(fp);                      <span class="tok-comment">// Always close!</span>
    <span class="tok-keyword">return</span> <span class="tok-number">0</span>;
}
</pre></div>
        <table class="data-table">
          <thead><tr><th>Mode</th><th>Meaning</th></tr></thead>
          <tbody>
            <tr><td><code>"r"</code></td><td>Read (file must exist)</td></tr>
            <tr><td><code>"w"</code></td><td>Write (creates or overwrites)</td></tr>
            <tr><td><code>"a"</code></td><td>Append (adds to end)</td></tr>
            <tr><td><code>"r+"</code></td><td>Read and write</td></tr>
          </tbody>
        </table>`,
      },
      {
        heading: 'Reading from a File',
        body: `<div class="code-block"><div class="code-header"><span class="code-lang">C</span><button class="copy-btn" onclick="copyCode(this)">📋 Copy</button></div><pre>
<span class="tok-type">int</span> <span class="tok-function">main</span>() {
    FILE *fp = <span class="tok-function">fopen</span>(<span class="tok-string">"data.txt"</span>, <span class="tok-string">"r"</span>);
    <span class="tok-type">char</span> line[<span class="tok-number">100</span>];

    <span class="tok-keyword">while</span> (<span class="tok-function">fgets</span>(line, <span class="tok-keyword">sizeof</span>(line), fp)) {
        <span class="tok-function">printf</span>(<span class="tok-string">"%s"</span>, line);  <span class="tok-comment">// Print each line</span>
    }
    <span class="tok-function">fclose</span>(fp);
    <span class="tok-keyword">return</span> <span class="tok-number">0</span>;
}
</pre></div>
        <div class="info-box tip"><strong>💡 Best Practice:</strong> Always check if <code class="inline">fopen</code> returns NULL before using the file pointer. Forgetting to close files causes memory leaks!</div>`,
      },
    ],
    quiz: [
      {
        q: 'Which function is used to open a file in C?',
        options: ['openfile()', 'fopen()', 'file_open()', 'open()'],
        answer: 1,
        explanation: 'fopen() is the standard C library function to open a file. It returns a FILE pointer.',
      },
      {
        q: 'What mode opens a file for appending?',
        options: ['"w"', '"r"', '"a"', '"rw"'],
        answer: 2,
        explanation: '"a" mode opens the file for appending — new data is written at the end without erasing existing content.',
      },
    ],
  },

  memory: {
    title: 'Dynamic Memory Allocation',
    sections: [
      {
        heading: 'Why Dynamic Memory?',
        body: `<p class="concept-text">With static arrays, you must know the size at compile time. <strong>Dynamic memory allocation</strong> lets you request memory at <em>runtime</em> — only as much as you need.</p>
        <div class="info-box note"><strong>📌 Stack vs Heap:</strong><br>
        • <strong>Stack</strong> — Local variables, automatically managed, limited size<br>
        • <strong>Heap</strong> — Dynamic allocation via malloc/calloc, manually managed, large</div>`,
      },
      {
        heading: 'malloc, calloc, realloc, free',
        body: `<div class="code-block"><div class="code-header"><span class="code-lang">C</span><button class="copy-btn" onclick="copyCode(this)">📋 Copy</button></div><pre>
<span class="tok-macro">#include</span> <span class="tok-string">&lt;stdlib.h&gt;</span>
<span class="tok-macro">#include</span> <span class="tok-string">&lt;stdio.h&gt;</span>

<span class="tok-type">int</span> <span class="tok-function">main</span>() {
    <span class="tok-type">int</span> n = <span class="tok-number">5</span>;

    <span class="tok-comment">// malloc — allocate raw memory (uninitialized)</span>
    <span class="tok-type">int</span> *arr = (<span class="tok-type">int</span>*) <span class="tok-function">malloc</span>(n * <span class="tok-keyword">sizeof</span>(<span class="tok-type">int</span>));

    <span class="tok-comment">// calloc — allocate + initialize to zero</span>
    <span class="tok-type">int</span> *arr2 = (<span class="tok-type">int</span>*) <span class="tok-function">calloc</span>(n, <span class="tok-keyword">sizeof</span>(<span class="tok-type">int</span>));

    <span class="tok-comment">// Fill the array</span>
    <span class="tok-keyword">for</span> (<span class="tok-type">int</span> i = <span class="tok-number">0</span>; i < n; i++) arr[i] = (i+<span class="tok-number">1</span>) * <span class="tok-number">10</span>;

    <span class="tok-comment">// realloc — resize existing allocation</span>
    arr = (<span class="tok-type">int</span>*) <span class="tok-function">realloc</span>(arr, <span class="tok-number">10</span> * <span class="tok-keyword">sizeof</span>(<span class="tok-type">int</span>));

    <span class="tok-comment">// free — release memory (ALWAYS do this!)</span>
    <span class="tok-function">free</span>(arr);
    <span class="tok-function">free</span>(arr2);
    <span class="tok-keyword">return</span> <span class="tok-number">0</span>;
}
</pre></div>
        <div class="info-box warning"><strong>⚠️ Memory Leaks:</strong> Every <code class="inline">malloc</code>/<code class="inline">calloc</code> must have a matching <code class="inline">free()</code>. Failing to free memory causes <em>memory leaks</em> that can crash long-running programs!</div>
        <table class="data-table">
          <thead><tr><th>Function</th><th>Initializes</th><th>Use when...</th></tr></thead>
          <tbody>
            <tr><td><code>malloc(size)</code></td><td>No (garbage values)</td><td>You'll overwrite all values anyway</td></tr>
            <tr><td><code>calloc(n, size)</code></td><td>Yes (zeros)</td><td>You need zero-initialized memory</td></tr>
            <tr><td><code>realloc(ptr, size)</code></td><td>Partial</td><td>You need to resize an allocation</td></tr>
            <tr><td><code>free(ptr)</code></td><td>—</td><td>Done using allocated memory</td></tr>
          </tbody>
        </table>`,
      },
    ],
    quiz: [
      {
        q: 'What is a memory leak?',
        options: ['RAM physically leaking', 'Allocated memory that is never freed', 'Reading wrong memory', 'Null pointer error'],
        answer: 1,
        explanation: 'A memory leak occurs when dynamically allocated memory is never freed, causing the program to consume more and more memory over time.',
      },
      {
        q: 'Which function allocates memory AND initializes it to zero?',
        options: ['malloc', 'calloc', 'realloc', 'alloc'],
        answer: 1,
        explanation: 'calloc() allocates memory for n elements and initializes all bytes to zero. malloc() does not initialize memory.',
      },
    ],
  },
};

/* ===== STATE ===== */
const state = {
  currentTopic: null,
  completed: JSON.parse(localStorage.getItem('c-tutorial-completed') || '[]'),
};

/* ===== UTILS ===== */
function saveProgress() {
  localStorage.setItem('c-tutorial-completed', JSON.stringify(state.completed));
}

function getProgress() {
  return state.completed.length;
}

function updateProgressUI() {
  const pct = Math.round((getProgress() / TOPICS.length) * 100);
  document.getElementById('progress-count').textContent = getProgress();
  document.getElementById('progress-total').textContent = TOPICS.length;
  document.getElementById('overall-bar').style.width = pct + '%';
  document.getElementById('overall-pct').textContent = pct + '%';
}

/* ===== SIDEBAR RENDER ===== */
function renderSidebar() {
  const container = document.getElementById('sidebar-topics');
  container.innerHTML = TOPICS.map((t, i) => {
    const isDone = state.completed.includes(t.id);
    const isActive = state.currentTopic === t.id;
    return `
      <div class="sidebar-item ${isActive ? 'active' : ''} ${isDone ? 'completed' : ''}"
           data-id="${t.id}" onclick="openTopic('${t.id}')" id="sidebar-${t.id}">
        <span class="topic-icon">${t.icon}</span>
        <span>${i + 1}. ${t.title}</span>
        <span class="done-check">✓</span>
      </div>`;
  }).join('');
}

/* ===== HOME PAGE ===== */
function renderHome() {
  const grid = document.getElementById('topics-grid');
  grid.innerHTML = TOPICS.map(t => {
    const isDone = state.completed.includes(t.id);
    return `
      <div class="topic-card ${isDone ? 'completed' : ''}" onclick="openTopic('${t.id}')" id="card-${t.id}">
        <div class="card-icon">${t.icon}</div>
        <div class="card-title">${t.title}</div>
        <div class="card-desc">${t.desc}</div>
        <div class="card-meta">
          <span class="card-difficulty ${t.difficulty}">${t.difficulty}</span>
          <span style="font-size:0.78rem;color:var(--text-muted)">⏱ ${t.time}</span>
          <span class="card-arrow">${isDone ? '✓' : '→'}</span>
        </div>
      </div>`;
  }).join('');
}

/* ===== OPEN TOPIC ===== */
function openTopic(id) {
  const content = CONTENT[id];
  if (!content) return;

  state.currentTopic = id;
  const topicIndex = TOPICS.findIndex(t => t.id === id);
  const topic = TOPICS[topicIndex];
  const isDone = state.completed.includes(id);

  // Switch pages
  document.getElementById('page-home').style.display = 'none';
  const page = document.getElementById('page-tutorial');
  page.style.display = 'block';

  // Breadcrumb
  document.getElementById('breadcrumb-title').textContent = content.title;

  // Title & meta
  document.getElementById('tutorial-title').textContent = content.title;
  document.getElementById('tutorial-difficulty').textContent = topic.difficulty;
  document.getElementById('tutorial-time').textContent = '⏱ ' + topic.time;
  document.getElementById('tutorial-num').textContent = `Lesson ${topicIndex + 1} of ${TOPICS.length}`;

  // Sections
  const body = document.getElementById('tutorial-sections');
  body.innerHTML = content.sections.map((s, i) => `
    <div class="concept-section" id="section-${i}">
      <h2 class="concept-heading">
        <span class="heading-num">${i + 1}</span>
        ${s.heading}
      </h2>
      ${s.body}
    </div>
  `).join('');

  // TOC
  const toc = document.getElementById('toc-list');
  toc.innerHTML = content.sections.map((s, i) => `
    <div class="toc-item" onclick="document.getElementById('section-${i}').scrollIntoView({behavior:'smooth'})">
      ${s.heading}
    </div>
  `).join('');

  // Progress card
  const markBtn = document.getElementById('mark-done-btn');
  markBtn.textContent = isDone ? '✅ Completed!' : '✔ Mark as Complete';
  markBtn.className = 'mark-done-btn' + (isDone ? ' done' : '');
  markBtn.onclick = () => markComplete(id);

  // Quiz
  renderQuiz(content.quiz, id);

  // Nav buttons
  const prev = TOPICS[topicIndex - 1];
  const next = TOPICS[topicIndex + 1];
  const prevBtn = document.getElementById('nav-prev');
  const nextBtn = document.getElementById('nav-next');

  if (prev) {
    prevBtn.style.display = 'flex';
    prevBtn.onclick = () => openTopic(prev.id);
    prevBtn.querySelector('.nav-label').textContent = 'Previous';
    prevBtn.querySelector('.nav-text').textContent = prev.title;
  } else {
    prevBtn.style.display = 'none';
  }
  if (next) {
    nextBtn.style.display = 'flex';
    nextBtn.onclick = () => openTopic(next.id);
    nextBtn.querySelector('.nav-label').textContent = 'Next';
    nextBtn.querySelector('.nav-text').textContent = next.title;
  } else {
    nextBtn.style.display = 'none';
  }

  // Scroll to top
  document.getElementById('main-content').scrollTo({ top: 0, behavior: 'smooth' });
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Update sidebar
  renderSidebar();

  // Close mobile sidebar
  closeSidebar();
}

/* ===== MARK COMPLETE ===== */
function markComplete(id) {
  if (!state.completed.includes(id)) {
    state.completed.push(id);
    saveProgress();
    updateProgressUI();
    renderHome();
    renderSidebar();
  }
  const btn = document.getElementById('mark-done-btn');
  btn.textContent = '✅ Completed!';
  btn.className = 'mark-done-btn done';
  btn.classList.add('done');
  // Pulse animation
  btn.style.transform = 'scale(1.05)';
  setTimeout(() => { btn.style.transform = ''; }, 300);
}

/* ===== QUIZ ENGINE ===== */
function renderQuiz(questions, topicId) {
  const section = document.getElementById('quiz-section');
  if (!questions || !questions.length) { section.style.display = 'none'; return; }
  section.style.display = 'block';

  const qHtml = questions.map((q, qi) => `
    <div class="quiz-question" id="quiz-q-${qi}">
      <div class="quiz-q-text">Q${qi + 1}. ${q.q}</div>
      <div class="quiz-options">
        ${q.options.map((opt, oi) => `
          <div class="quiz-option" id="qopt-${qi}-${oi}" onclick="selectOption(${qi}, ${oi}, ${q.answer})">
            <span class="opt-letter">${String.fromCharCode(65 + oi)}</span>
            ${opt}
          </div>
        `).join('')}
      </div>
      <div class="quiz-feedback" id="quiz-fb-${qi}"></div>
    </div>
  `).join('');

  document.getElementById('quiz-questions').innerHTML = qHtml;
}

const quizAnswers = {};

function selectOption(qi, oi, correct) {
  // Clear previous selection for this question
  document.querySelectorAll(`[id^="qopt-${qi}-"]`).forEach(el => {
    el.classList.remove('selected', 'correct', 'incorrect');
  });

  quizAnswers[qi] = { selected: oi, correct };
  document.getElementById(`qopt-${qi}-${oi}`).classList.add('selected');

  // Show feedback immediately
  const isCorrect = oi === correct;
  const fb = document.getElementById(`quiz-fb-${qi}`);
  const topic = CONTENT[state.currentTopic];
  const explanation = topic?.quiz[qi]?.explanation || '';

  fb.className = `quiz-feedback ${isCorrect ? 'correct' : 'incorrect'} show`;
  fb.innerHTML = isCorrect
    ? `✅ <strong>Correct!</strong> ${explanation}`
    : `❌ <strong>Not quite.</strong> ${explanation}`;

  // Color the options
  document.getElementById(`qopt-${qi}-${oi}`).classList.add(isCorrect ? 'correct' : 'incorrect');
  if (!isCorrect) {
    document.getElementById(`qopt-${qi}-${correct}`).classList.add('correct');
  }
}

/* ===== GO HOME ===== */
function goHome() {
  state.currentTopic = null;
  document.getElementById('page-tutorial').style.display = 'none';
  document.getElementById('page-home').style.display = 'block';
  renderSidebar();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ===== COPY CODE ===== */
function copyCode(btn) {
  const pre = btn.closest('.code-block').querySelector('pre');
  const text = pre.innerText;
  navigator.clipboard.writeText(text).then(() => {
    btn.textContent = '✅ Copied!';
    btn.classList.add('copied');
    setTimeout(() => {
      btn.textContent = '📋 Copy';
      btn.classList.remove('copied');
    }, 2000);
  }).catch(() => {
    btn.textContent = '❌ Failed';
    setTimeout(() => { btn.textContent = '📋 Copy'; }, 1500);
  });
}

/* ===== SEARCH ===== */
function initSearch() {
  const input = document.getElementById('search-input');
  const results = document.getElementById('search-results');

  input.addEventListener('input', () => {
    const q = input.value.toLowerCase().trim();
    if (!q) { results.classList.remove('visible'); return; }

    const matches = TOPICS.filter(t =>
      t.title.toLowerCase().includes(q) || t.desc.toLowerCase().includes(q)
    );

    if (!matches.length) {
      results.innerHTML = '<div class="search-result-item" style="color:var(--text-muted)">No results found</div>';
    } else {
      results.innerHTML = matches.map(t => `
        <div class="search-result-item" onclick="openTopic('${t.id}'); document.getElementById('search-input').value=''; document.getElementById('search-results').classList.remove('visible')">
          ${t.icon} ${t.title}
          <span>${t.desc}</span>
        </div>
      `).join('');
    }
    results.classList.add('visible');
  });

  document.addEventListener('click', e => {
    if (!e.target.closest('.search-box')) results.classList.remove('visible');
  });
}

/* ===== MOBILE SIDEBAR ===== */
function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebar-overlay');
  sidebar.classList.toggle('open');
  overlay.classList.toggle('show');
}

function closeSidebar() {
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('sidebar-overlay').classList.remove('show');
}

/* ===== INIT ===== */
document.addEventListener('DOMContentLoaded', () => {
  renderSidebar();
  renderHome();
  updateProgressUI();
  initSearch();

  document.getElementById('sidebar-toggle').addEventListener('click', toggleSidebar);
  document.getElementById('sidebar-overlay').addEventListener('click', closeSidebar);

  // Start button
  document.getElementById('start-btn').addEventListener('click', () => {
    openTopic(TOPICS[0].id);
  });
});
