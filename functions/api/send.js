function escapeHtml(str) {
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}

export async function onRequestPost(context) {
    const corsHeaders = {
        'Access-Control-Allow-Origin': 'https://williamortiz.dev',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
    };

    const apiKey = context.env.RESEND_API_KEY;
    if (!apiKey) {
        return Response.json(
            { error: 'Server configuration error' },
            { status: 500, headers: corsHeaders }
        );
    }

    let body;
    try {
        body = await context.request.json();
    } catch {
        return Response.json(
            { error: 'Invalid request body.' },
            { status: 400, headers: corsHeaders }
        );
    }

    const { name, email, message } = body;

    if (!name || !email || !message) {
        return Response.json(
            { error: 'All fields are required.' },
            { status: 400, headers: corsHeaders }
        );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return Response.json(
            { error: 'Invalid email address.' },
            { status: 400, headers: corsHeaders }
        );
    }

    if (name.length > 200 || email.length > 320 || message.length > 5000) {
        return Response.json(
            { error: 'Input exceeds allowed length.' },
            { status: 400, headers: corsHeaders }
        );
    }

    try {
        const res = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                from: 'Portfolio Contact <noreply@williamortiz.dev>',
                to: ['contact@williamortiz.dev'],
                reply_to: email,
                subject: `Portfolio Contact: ${escapeHtml(name)}`,
                html: `
                    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto;">
                        <h2 style="color: #800000; border-bottom: 2px solid #800000; padding-bottom: 8px;">New Contact Form Submission</h2>
                        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
                        <p><strong>Email:</strong> <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>
                        <h3 style="color: #333; margin-top: 24px;">Message:</h3>
                        <div style="background: #f8f8f8; padding: 16px; border-radius: 6px; white-space: pre-wrap;">${escapeHtml(message)}</div>
                        <p style="color: #999; font-size: 12px; margin-top: 24px;">Sent from williamortiz.dev contact form</p>
                    </div>
                `,
            }),
        });

        const data = await res.json();

        if (!res.ok) {
            console.error('Resend API error:', data);
            return Response.json(
                { error: 'Failed to send email. Please try again.' },
                { status: 400, headers: corsHeaders }
            );
        }

        return Response.json(
            { success: true, id: data.id },
            { status: 200, headers: corsHeaders }
        );
    } catch (err) {
        console.error('Unexpected error:', err);
        return Response.json(
            { error: 'An unexpected error occurred. Please try again later.' },
            { status: 500, headers: corsHeaders }
        );
    }
}

export async function onRequestOptions() {
    return new Response(null, {
        status: 204,
        headers: {
            'Access-Control-Allow-Origin': 'https://williamortiz.dev',
            'Access-Control-Allow-Methods': 'POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type',
        },
    });
}
