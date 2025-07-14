'use client';

export default function Footer() {
  return (
    <footer className="w-full bg-black border-t border-white/10 py-10 mt-16">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-5 px-6">
        <span className="text-white/70 text-sm">
          © {new Date().getFullYear()} J832 Protocol. All rights reserved.
        </span>
        <div className="flex items-center gap-5">
          <a
            href="https://github.com/mfelizweb/j832Protocol"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#00FF90] hover:text-white/90 transition"
            aria-label="GitHub"
          >
            <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
              <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.186 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.157-1.11-1.466-1.11-1.466-.908-.621.069-.609.069-.609 1.004.07 1.532 1.031 1.532 1.031.893 1.53 2.341 1.089 2.91.833.091-.647.35-1.09.636-1.341-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0112 6.844a9.54 9.54 0 012.504.336c1.91-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337 4.695-4.566 4.944.359.31.679.924.679 1.863 0 1.345-.012 2.43-.012 2.76 0 .268.18.58.688.482C19.138 20.205 22 16.448 22 12.021 22 6.484 17.523 2 12 2z" fill="currentColor"/>
            </svg>
          </a>
          <a
            href="https://x.com/j832protocol?t=aeq-q4qU3iPcFr7lbxX7pA&s=09"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#00FF90] hover:text-white/90 transition"
            aria-label="X"
          >
            <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
              <path d="M16.5 3h3.75l-7.485 8.56L21 21h-6.037l-4.52-6.224L5.44 21H1.5l7.953-9.09L3 3h6.133l4.008 5.768L16.5 3zm-1.033 15.026h1.638l-6.43-9.02H7.6l7.867 9.02z" fill="currentColor"/>
            </svg>
          </a>
          <a
            href="https://discord.gg/tCZCpGnC"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#00FF90] hover:text-white/90 transition"
            aria-label="Discord"
          >
            <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
              <path d="M20.317 4.369A19.791 19.791 0 0016.885 3c-.207.367-.442.856-.606 1.237a18.706 18.706 0 00-5.558 0c-.165-.381-.4-.87-.606-1.237A19.785 19.785 0 003.683 4.369C1.487 7.827.287 11.141.072 14.421c2.302 1.626 4.553 2.726 6.756 3.373a17.427 17.427 0 001.416-2.301c-.18-.065-.355-.135-.523-.211-2.229-.982-3.039-2.422-3.039-2.422.209-.14.416-.291.616-.448 2.3 1.004 4.58 1.01 6.859 0 .201.157.408.308.617.448 0 0-.812 1.44-3.041 2.422a6.322 6.322 0 01-.523.211c.367.647.77 1.519 1.416 2.301 2.203-.647 4.454-1.747 6.756-3.373-.221-3.28-1.421-6.594-3.617-10.052zM8.693 13.333c-.667 0-1.216-.608-1.216-1.355 0-.747.534-1.355 1.216-1.355.67 0 1.219.608 1.216 1.355 0 .747-.546 1.355-1.216 1.355zm6.614 0c-.667 0-1.217-.608-1.217-1.355 0-.747.534-1.355 1.217-1.355.67 0 1.216.608 1.216 1.355 0 .747-.546 1.355-1.216 1.355z" fill="currentColor"/>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
