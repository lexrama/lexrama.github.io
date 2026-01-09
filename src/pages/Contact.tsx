export const Contact = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Contact 💬</h1>
      <p className="text-lg">Let's connect via:</p>
      <ul className="list-disc list-inside">
        <li>
          <a
            className="text-blue-500"
            href="mailto:alexaramachandran@gmail.com"
          >
            email
          </a>
        </li>
        <li>
          <a
            className="text-blue-500"
            href="https://linkedin.com/in/lex-rama"
            rel="noreferrer"
            target="_blank"
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a
            className="text-blue-500"
            href="https://github.com/lexrama"
            rel="noreferrer"
            target="_blank"
          >
            GitHub
          </a>
        </li>
        <li>
          <a
            className="text-blue-500"
            href="https://instagram.com/lex.rama"
            rel="noreferrer"
            target="_blank"
          >
            Instagram
          </a>
        </li>
      </ul>
    </div>
  );
};
