const { Resend } = require('resend');

module.exports = async function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', 'https://williamortiz.dev');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        return res.status(204).end();
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
        console.error('RESEND_API_KEY environment variable is not set');
        return res.status(500).json({ error: 'Server configuration error' });
    }

    const resend = new Resend(apiKey);
    const { name, email, message } = req.body || {};

    if (!name || !email || !message) {
        return res.status(400).json({ error: 'All fields are required.' });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({ error: 'Invalid email address.' });
    }

    if (name.length > 200 || email.length > 320 || message.length > 5000) {
        return res.status(400).json({ error: 'Input exceeds allowed length.' });
    }

    try {
        const { data, error } = await resend.emails.send({
            from: 'Portfolio Contact <noreply@williamortiz.dev>',
            to: ['contact@williamortiz.dev'],
            replyTo: email,
            subject: `Portfolio Contact: ${name}`,
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
        });

        if (error) {
            console.error('Resend API error:', error);
            return res.status(400).json({ error: 'Failed to send email. Please try again.' });
        }

        return res.status(200).json({ success: true, id: data.id });
    } catch (err) {
        console.error('Unexpected error:', err);
        return res.status(500).json({ error: 'An unexpected error occurred. Please try again later.' });
    }
};

function escapeHtml(str) {
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}
