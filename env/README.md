# Environment Variables

This folder contains environment variable templates and documentation

1. Copy `.env.example` to `.env` in the root directory of your project
2. Fill in your actual values in the `.env` file
3. **Never commit `.env` files to version control** - they contain sensitive information

## Files
I will add an example file soon
## Usage

Most frameworks and libraries automatically load `.env` files from the project root:
- Node.js: Use `dotenv` package
- Python: Use `python-dotenv` package
- React: Variables prefixed with `REACT_APP_` are available
- Next.js: Variables prefixed with `NEXT_PUBLIC_` are available

## Security
- Always add `.env` to your `.gitignore` file
- Use `.env.example` as a template that can be safely committed
- Never share your `.env` file or commit it to version control

