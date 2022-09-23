import {Lang} from '@makechtec/tlapali_dev';

export const Java: Lang = {
    name: 'java',
    keywords: [
        'public',
        'class'
    ],
    rules:[
        {
            "name": "class_declaration",
            "pattern": "class\\s*(?<target>[A-z]*)\\s\\{"
        }
    ]
}