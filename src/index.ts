import {Lang} from '@makechtec/tlapali_dev';

export const Java: Lang = {
    name: 'java',
    keywords: [
        'abstract',
        'assert',
        'boolean',
        'break',
        'byte',
        'case',
        'catch',
        'char',
        'class',
        'const',
        'continue',
        'default',
        'do',
        'double',
        'else',
        'enum',
        'extends',
        'final',
        'finally',
        'float',
        'for',
        'goto',
        'if',
        'implements',
        'import',
        'instanceof',
        'int',
        'interface',
        'long',
        'native',
        'new',
        'package',
        'private',
        'protected',
        'public',
        'return',
        'short',
        'static',
        'strictfp',
        'super',
        'switch',
        'sincronized',
        'this',
        'throw',
        'throws',
        'transient',
        'try',
        'void',
        'volatile',
        'while'
    ],
    rules:[
        {
            "name": "class_declaration",
            "pattern": "class\\s+(?<target>\\w*)\\s*\\{"
        },
        {
            "name": "class_name",
            "pattern": "[^\\w'](?<target>[A-Z]\\w+)\\W"
        },
        {
            "name": "import_declaration",
            "pattern": "import\\s+[\\w|\\.]+\\.(?<target>\\w+);"
        },
        {
            "name": "variable_declaration",
            "pattern": "\\s+(?<target>\\w+)\\s*(;|=)"
        },
        {
            "name": "method_declaration",
            "pattern": "\\w+\\s+(?<target>\\w+)\\s*\\("
        },
        {
            name: "curly_brackets",
            pattern: "(?<target>\\{|\\})"
        }

    ]
}