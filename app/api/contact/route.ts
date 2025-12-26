import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, email, company, budgetRange, projectType, projectDescription } = body;

    // Validate required fields
    if (!fullName || !email || !projectType || !projectDescription) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create transporter with SMTP settings
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.SMTP_FROM || 'noreply@clentro.io',
      to: 'contact@clentro.io',
      subject: `New Project Inquiry from ${fullName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #FF5F00;">New Project Inquiry</h2>
          
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0;">Contact Information</h3>
            <p><strong>Name:</strong> ${fullName}</p>
            <p><strong>Email:</strong> ${email}</p>
            ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
            ${budgetRange ? `<p><strong>Budget Range:</strong> ${budgetRange}</p>` : ''}
          </div>
          
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0;">Project Details</h3>
            <p><strong>Project Type:</strong> ${projectType}</p>
            <p><strong>Description:</strong></p>
            <p style="white-space: pre-wrap;">${projectDescription}</p>
          </div>
          
          <p style="color: #666; font-size: 12px; margin-top: 30px;">
            This inquiry was submitted via the Clentro website contact form.
          </p>
        </div>
      `,
      text: `
New Project Inquiry from ${fullName}

Contact Information:
- Name: ${fullName}
- Email: ${email}
${company ? `- Company: ${company}` : ''}
${budgetRange ? `- Budget Range: ${budgetRange}` : ''}

Project Details:
- Project Type: ${projectType}
- Description: ${projectDescription}
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    // Optional: Send confirmation email to the user
    const confirmationEmail = {
      from: process.env.SMTP_FROM || 'noreply@clentro.io',
      to: email,
      subject: 'We received your project inquiry - Clentro',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #FF5F00;">Thank you for reaching out!</h2>
          
          <p>Hi ${fullName},</p>
          
          <p>We've received your project inquiry and will respond within 24 hours with next steps.</p>
          
          <p>In the meantime, feel free to check out our <a href="https://clentro.io/methodology" style="color: #FF5F00;">Ship Fast Methodology</a> to learn more about how we work.</p>
          
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 30px 0;">
            <h3 style="margin-top: 0;">Your Inquiry Summary</h3>
            <p><strong>Project Type:</strong> ${projectType}</p>
            ${budgetRange ? `<p><strong>Budget Range:</strong> ${budgetRange}</p>` : ''}
          </div>
          
          <p>Best regards,<br/>The Clentro Team</p>
          
          <hr style="border: none; border-top: 1px solid #ddd; margin: 30px 0;" />
          
          <p style="color: #666; font-size: 12px;">
            <strong>Contact us:</strong><br/>
            Email: <a href="mailto:contact@clentro.io" style="color: #FF5F00;">contact@clentro.io</a>
          </p>
        </div>
      `,
    };

    await transporter.sendMail(confirmationEmail);

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
