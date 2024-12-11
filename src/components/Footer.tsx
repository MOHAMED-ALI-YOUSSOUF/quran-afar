import React from 'react';
import { Mail, MessageCircle } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-emerald-900 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold mb-4">Remerciements</h3>
          <p className="text-emerald-100">
            Nous remercions Allah سُبْحَانَهُ وَتَعَالَىٰ pour Sa guidance et tous ceux qui ont 
            contribué à ce projet de traduction.
          </p>
        </div>
        <div className="flex justify-center gap-6">
          <a
            href="mailto:contact@quranafar.com"
            className="flex items-center gap-2 hover:text-amber-400 transition-colors"
          >
            <Mail className="w-5 h-5" />
            <span>Email</span>
          </a>
          <a
            href="https://wa.me/1234567890"
            className="flex items-center gap-2 hover:text-amber-400 transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </footer>
  );
}