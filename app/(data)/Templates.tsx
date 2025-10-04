export default [
    {
        name: 'Blog Title',
        desc: 'An AI tool that generates 5 catchy and SEO-friendly blog titles based on your niche and outline.',
        category: 'Blog',
        icon: 'https://cdn-icons-png.flaticon.com/128/4186/4186534.png',
        aiPrompt: 'Act as an Expert Blog Title Writer. Generate 5 catchy, engaging, and SEO-friendly blog titles based on the provided niche: "{niche}" and outline: "{outline}". The titles should be attention-grabbing and encourage clicks. Return response in a markdown list format using "-".',
        slug: 'generate-blog-title',
        form: [
            {
                label: 'Enter your blog niche',
                field: 'input',
                name: 'niche',
                required: true
            },
            {
                label: 'Enter blog outline (optional)',
                field: 'textarea',
                name: 'outline',
            }
        ]
    },
    {
        name: 'Blog Content',
        desc: 'An AI tool to generate a complete, well-structured blog post from a topic and outline.',
        category: 'blog',
        icon: 'https://cdn-icons-png.flaticon.com/128/4905/4905454.png',
        slug: 'blog-content-generation',
        aiPrompt: 'Act as an expert SEO Content Writer. Generate a comprehensive and engaging blog post based on the topic: "{topic}" and the following outline: "{outline}". Write in a clear and informative tone. Structure the article with an introduction, a body that follows the outline points, and a concluding summary. Use markdown for formatting: # for the main title, ## for headings, **text** for bold, and - for bullet points.',
        form: [
            {
                label: 'Enter your blog topic',
                field: 'input',
                name: 'topic',
                required: true
            },
            {
                label: 'Enter blog Outline here',
                field: 'textarea',
                name: 'outline'
            }
        ]
    },
    {
        name: 'Blog Topic Ideas',
        desc: 'An AI tool that brainstorms creative and trending blog topic ideas for your niche.',
        category: 'Blog',
        icon: 'https://cdn-icons-png.flaticon.com/128/11497/11497847.png',
        slug: 'blog-topic-idea',
        aiPrompt: 'Act as a Content Strategist. Generate 5 creative and engaging blog topic ideas for the niche: "{niche}". Provide only the topic titles, without any descriptions. Return the response as a markdown list.',
        form: [
            {
                label: 'Enter your Niche',
                field: 'input',
                name: 'niche',
                required: true
            },
        ]
    },
    {
        name: 'YouTube SEO Title',
        desc: 'An AI tool that generates 5 click-worthy and SEO-optimized titles for your YouTube videos.',
        category: 'Youtube Tools',
        icon: 'https://cdn-icons-png.flaticon.com/128/402/402075.png',
        slug: 'youtube-seo-title',
        aiPrompt: 'Act as a YouTube SEO expert. Based on the video keywords: "{keywords}" and description outline: "{outline}", generate 5 highly optimized YouTube video titles designed to maximize Click-Through Rate (CTR). The titles should be compelling and include relevant keywords naturally. Return response as a markdown bulleted list.',
        form: [
            {
                label: 'Enter your youtube video topic keywords',
                field: 'input',
                name: 'keywords',
                required: true
            },
            {
                label: 'Enter youtube description outline here',
                field: 'textarea',
                name: 'outline'
            }
        ]

    },
    {
        name: 'YouTube Description',
        desc: 'An AI tool that writes an engaging YouTube video description with emojis and hashtags.',
        category: 'Youtube Tool',
        icon: 'https://cdn-icons-png.flaticon.com/128/2111/2111748.png',
        slug: 'youtube-description',
        aiPrompt: 'Generate a compelling YouTube video description based on the topic: "{topic}" and outline: "{outline}". The description should start with a strong hook, summarize the video content in 3-4 lines with relevant emojis, and end with 3-5 relevant hashtags. Format the output using markdown. Use **text** for bolding.',
        form: [
            {
                label: 'Enter your video topic/title',
                field: 'input',
                name: 'topic',
                required: true
            },
            {
                label: 'Enter YouTube Outline here',
                field: 'textarea',
                name: 'outline'
            }
        ]
    },
    {
        name: 'YouTube Tags',
        desc: 'An AI tool that generates a list of relevant SEO tags for your YouTube video.',
        category: 'Youtube Tool',
        icon: 'https://cdn-icons-png.flaticon.com/128/4674/4674918.png',
        slug: 'youtube-tag',
        aiPrompt: 'Act as a YouTube SEO specialist. Generate a list of 15 relevant YouTube tags based on the video title: "{title}" and outline: "{outline}". Include a mix of broad, specific, and long-tail keywords. Return the tags as a single, comma-separated string without bullet points or numbering for easy copying.',
        form: [
            {
                label: 'Enter your YouTube title',
                field: 'input',
                name: 'title',
                required: true
            },
            {
                label: 'Enter YouTube video Outline here (Optional)',
                field: 'textarea',
                name: 'outline'
            }
        ]
    },
    {
        name: 'Rewrite Article (Plagiarism Free)',
        desc: 'Use this tool to rewrite an existing article to make it unique, improve readability, and pass AI detectors.',
        icon: 'https://cdn-icons-png.flaticon.com/128/3131/3131607.png',
        category: 'Rewriting Tool',
        slug: 'rewrite-article',
        aiPrompt: 'Act as an expert editor. Rewrite the following article to be completely human-readable amd humarized, while preserving the original meaning and core information. Improve it passes AI detection and plagiarism checks. The article to rewrite is: "{article}". Return the rewritten article in clean markdown format. Use # for large headings, ## for subheadings, and **text** for bold.',
        form: [
            {
                label: '🤖 Provide your Article/Blogpost or any other content to rewrite.',
                field: 'textarea',
                name: 'article',
                required: true
            }
        ]
    },
    {
        name: 'Text Improver',
        desc: 'This tool refines your writing for clarity, tone, and grammatical correctness.',
        icon: 'https://cdn-icons-png.flaticon.com/128/1686/1686815.png',
        category: 'Writing Assistant',
        slug: 'text-improver',
        aiPrompt: 'Rewrite the following text to improve Correct all spelling and grammar mistakes. The text to improve is: "{textToImprove}". Return only the improved text.',
        form: [
            {
                label: 'Enter text that you want to re-write or improve',
                field: 'textarea',
                name: 'textToImprove',
                required: true
            }
        ]
    },
    {
        name: 'Add Emojis to Text',
        desc: 'An AI tool to intelligently add relevant emojis to your text to make it more expressive.',
        icon: 'https://cdn-icons-png.flaticon.com/128/2584/2584606.png',
        category: 'Social Media',
        slug: 'add-emoji-to-text',
        aiPrompt: 'Analyze the following text and strategically add contextually appropriate emojis to enhance its tone and readability. Do not overuse emojis. The text is: "{outline}". Return only the rewritten text with emojis.',
        form: [
            {
                label: 'Enter your text to add emojis',
                field: 'textarea',
                name: 'outline',
                required: true
            }
        ]
    },
    {
        name: 'Instagram Post Generator',
        desc: 'An AI tool that creates engaging Instagram captions based on your keywords.',
        icon: 'https://cdn-icons-png.flaticon.com/128/15713/15713420.png',
        category: 'Social Media',
        slug: 'instagram-post-generator',
        aiPrompt: 'Act as a Social Media Manager. Generate 3 complete Instagram post captions based on the keywords: "{keywords}". Each caption should include: 1. A compelling hook to grab attention. 2. A value-driven body. 3. A clear call-to-action (CTA). 4. A group of 5-7 relevant hashtags. Separate each post with "---". Return the response in clean markdown format.',
        form: [
            {
                label: 'Enter Keywords for your post',
                field: 'input',
                name: 'keywords',
                required: true
            },
        ]
    },
    {
        name: 'Instagram Hashtag Generator',
        desc: 'An AI tool that generates a strategic mix of hashtags for your Instagram posts.',
        icon: 'https://cdn-icons-png.flaticon.com/128/7045/7045432.png',
        category: 'Social Media',
        slug: 'instagram-hash-tag-generator',
        aiPrompt: 'Act as an Instagram marketing expert. Generate 20 strategic hashtags based on the keywords: "{keywords}". Include a mix of niche, popular, and community-specific hashtags. Return the hashtags as a single block of text, with each hashtag starting with #, for easy copy-pasting.',
        form: [
            {
                label: 'Enter Keywords for your instagram hashtag',
                field: 'input',
                name: 'keywords',
                required: true
            },
        ]
    },
    {
        name: 'Instagram Post/Reel Idea',
        desc: 'An AI tool that generates new and trending Instagram post or reel ideas for your niche.',
        icon: 'https://cdn-icons-png.flaticon.com/128/1029/1029183.png',
        category: 'Social Media',
        slug: 'instagram-post-idea-generator',
        aiPrompt: 'Generate 5 trending and creative Instagram Post/Reel ideas for the niche: "{keywords}". For each idea, specify the format (e.g., Reel, Carousel Post) and provide a brief concept, including a potential hook or call-to-action. Return the response as a markdown bulleted list.',
        form: [
            {
                label: 'Enter Keywords / Niche for your instagram idea',
                field: 'input',
                name: 'keywords',
                required: true
            },
        ]
    },
    {
        name: 'English Grammar Check', // Corrected spelling
        desc: 'An AI Model to correct your English grammar by providing the text.',
        icon: 'https://cdn-icons-png.flaticon.com/128/12596/12596700.png',
        category: 'Writing Assistant',
        slug: 'english-grammar-checker',
        aiPrompt: 'Please correct all spelling and grammatical errors in the following text. Return only the corrected version of the text without any explanation. The text to correct is: "{inputText}".',
        form: [
            {
                label: 'Enter text to correct the grammar',
                field: 'input',
                name: 'inputText',
                required: true
            },
        ]
    },
    {
        name: 'Write Code',
        desc: 'An AI Model to generate clean, commented programming code in any language.',
        icon: 'https://cdn-icons-png.flaticon.com/128/6062/6062646.png',
        category: 'Coding',
        slug: 'write-code',
        aiPrompt: 'Act as an expert Senior Software Engineer and Coding Tutor. Carefully analyze the user\'s request: "{codeDescription}". IF the user is primarily asking for a code snippet, function, or program, provide the code directly within a single, clean markdown code block with the language specified. IF the user is asking for an explanation, a description, or a list (like \'explain 10 html tags\'), provide a well-structured answer using standard markdown. Use headings, bold text, and lists as needed. Place ALL code examples within their own separate and correctly formatted markdown code blocks.',
        form: [
            {
                label: 'Enter a description of the code you want, including the programming language.',
                field: 'textarea',
                name: 'codeDescription', // Corrected typo from 'codeDesscripton'
                required: true
            },
        ]
    },
    {
        name: 'Explain Code',
        desc: 'An AI Model to explain programming code in a clear and understandable way.',
        icon: 'https://cdn-icons-png.flaticon.com/128/8488/8488751.png',
        category: 'Coding',
        slug: 'explain-code',
        aiPrompt: 'Act as a Senior Software Engineer and code tutor. Explain the following code in a clear, step-by-step manner. Start with a high-level summary of what the code does, then break down the function of each major block or section. Code: "{codeDescription}". Return the explanation in clean markdown format.',
        form: [
            {
                label: 'Enter the code which you want to understand',
                field: 'textarea',
                name: 'codeDescription', // Corrected typo from 'codeDesscripton'
                required: true
            },
        ]
    },
    {
        name: 'Code Bug Detector',
        desc: 'This tool analyzes your code to find and fix bugs, offering detailed solutions.',
        icon: 'https://cdn-icons-png.flaticon.com/128/4426/4426267.png',
        category: 'Coding', // Corrected category name
        slug: 'code-bug-detector',
        aiPrompt: 'Act as a code debugger. Analyze the following code for bugs or errors: "{codeInput}". If you find any issues, please: 1. Identify the bug. 2. Explain why it is a bug. 3. Provide the corrected code snippet. 4. Explain the fix. If no bugs are found, state that the code appears to be correct. Return your response in clean markdown format, with code in proper code blocks.',
        form: [
            {
                label: 'Enter code which you want to debug',
                field: 'textarea',
                name: 'codeInput',
                required: true
            },
        ]
    },
    {
        name: 'Tagline Generator',
        desc: 'Struggling to find the perfect tagline? Let our AI assist you in creating memorable taglines.',
        icon: 'https://cdn-icons-png.flaticon.com/128/2178/2178616.png',
        category: 'Marketing', // Corrected spelling
        slug: 'tagline-generator',
        aiPrompt: 'Act as a branding expert. Generate 10 catchy and memorable taglines for a product named "{productName}" that is about "{outline}". Provide a variety of styles (e.g., witty, professional, modern, classic). Return the response as a markdown bulleted list.',
        form: [
            {
                label: 'Product/Brand Name',
                field: 'input',
                name: 'productName',
                required: true
            },
            {
                label: 'What you are selling / marketing',
                field: 'textarea',
                name: 'outline',
                required: true
            },
        ]
    },
    {
        name: 'Product Description',
        desc: 'An AI expert creating captivating and SEO-rich e-commerce product descriptions to boost sales.',
        icon: 'https://cdn-icons-png.flaticon.com/128/679/679922.png',
        category: 'Marketing', // Corrected spelling
        slug: 'product-description',
        aiPrompt: 'Act as an expert e-commerce copywriter. Write a persuasive, SEO-friendly product description for "{productName}" based on these details: "{outline}". The description should be benefit-oriented, highlighting how the product helps the customer. Use a short, engaging paragraph followed by 3-5 bullet points detailing key features. Return the response in clean markdown.',
        form: [
            {
                label: 'Product Name',
                field: 'input',
                name: 'productName',
                required: true
            },
            {
                label: 'Product Details',
                field: 'textarea',
                name: 'outline',
                required: true
            },
        ]
    },
]