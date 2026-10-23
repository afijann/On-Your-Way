/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useRef } from 'react';
import { ExternalLink, ArrowDown } from 'lucide-react';

interface Song {
  track: string;
  title: string;
  artist: string;
  note: string;
  youtubeUrl: string;
}

const playlist: Song[] = [
  {
    track: '01',
    title: 'Gaze',
    artist: 'Adhitia Sofyan',
    note: 'A quiet acoustic track to start with. Good for when you are unpacking your bags or sitting alone in your room.',
    youtubeUrl: 'https://www.youtube.com/watch?v=EGNSNUaWiWk',
  },
  {
    track: '02',
    title: 'Ikat Aku di Tulang Belikatmu',
    artist: 'Sal Priadi',
    note: 'One of my favorites from Sal Priadi. Play this when you need something familiar from home.',
    youtubeUrl: 'https://www.youtube.com/watch?v=XHtu1iGovYQ&list=RDXHtu1iGovYQ&start_radio=1',
  },
  {
    track: '03',
    title: 'Lagu Pejalan',
    artist: 'Sisir Tanah',
    note: 'Simple guitar and vocals. It feels like taking a long walk through a new city.',
    youtubeUrl: 'https://www.youtube.com/watch?v=2d1VXhsSItg',
  },
  {
    track: '04',
    title: 'Kita Mungkin',
    artist: 'Sisir Tanah',
    note: 'Another one by Sisir Tanah. It is calm and steady, good for late-night studying.',
    youtubeUrl: 'https://www.youtube.com/watch?v=sA7fcOPjgf0',
  },
  {
    track: '05',
    title: 'Pilu Membiru',
    artist: 'Kunto Aji',
    note: 'A bit heavier than the others, but it always clears the head after a long day.',
    youtubeUrl: 'https://www.youtube.com/watch?v=ckI1YgMg__w&list=RDckI1YgMg__w&start_radio=1',
  },
  {
    track: '06',
    title: 'Saudade',
    artist: 'Kunto Aji',
    note: 'A peaceful instrumental piece. No lyrics, just nice piano to listen to in the background.',
    youtubeUrl: 'https://www.youtube.com/watch?v=8Nm2sC34Yak',
  },
  {
    track: '07',
    title: 'Jatuh Suka',
    artist: 'Tulus',
    note: 'To end the playlist on a lighter note. Just an easy, cheerful song for your morning walk.',
    youtubeUrl: 'https://www.youtube.com/watch?v=2uJut6USftQ',
  },
];

export default function App() {
  const playlistRef = useRef<HTMLDivElement | null>(null);

  const scrollToPlaylist = () => {
    playlistRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#2B211E] font-sans antialiased">
      {/* Centered Editorial Container */}
      <main className="max-w-2xl mx-auto px-6 py-16 sm:py-24">
        {/* Section 1 & 2: Opening Section */}
        <header className="mb-20 sm:mb-28 pt-4">
          {/* Main Title (Indonesian title exactly as written) */}
          <h1 className="font-serif text-3xl sm:text-5xl md:text-[3.25rem] text-[#381116] font-normal tracking-tight leading-[1.15]">
            Untuk Perjalanan yang Belum Selesai
          </h1>

          {/* Subtitle */}
          <p className="font-sans text-base sm:text-lg text-[#6B5446] mt-4 font-normal">
            A little mixtape for the road ahead.
          </p>

          {/* Thin Hairline Divider */}
          <div className="w-16 h-px bg-[#DCD1C0] my-8 sm:my-10" />

          {/* Opening Sentence */}
          <p className="font-sans text-base sm:text-[1.05rem] text-[#3D2E27] leading-relaxed max-w-xl">
            Maybe you’d like to listen to these songs while reading the letter I wrote for you.
          </p>

          {/* Start Listening Button */}
          <div className="mt-8">
            <button
              type="button"
              onClick={scrollToPlaylist}
              className="inline-flex items-center gap-2.5 px-5 py-2.5 bg-[#9E3C32] hover:bg-[#883229] active:bg-[#772A22] text-[#FAF7F2] text-sm font-medium rounded-sm transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9E3C32] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FAF7F2] cursor-pointer"
            >
              <span>Start Listening</span>
              <ArrowDown className="w-4 h-4 opacity-90" aria-hidden="true" />
            </button>
          </div>
        </header>

        {/* Section 3: Playlist Section */}
        <section
          ref={playlistRef}
          aria-label="Mixtape Playlist"
          className="mb-24 sm:mb-32 scroll-mt-10"
        >
          {/* Sentence above the songs */}
          <div className="pb-6 border-b border-[#E8DEC8] mb-8">
            <p className="font-sans text-sm sm:text-base text-[#6B5446] leading-relaxed">
              Here are the songs I picked for you. You can listen to them while reading the letter.
            </p>
          </div>

          {/* Seven Songs List */}
          <div className="flex flex-col gap-5 sm:gap-6">
            {playlist.map((song) => (
              <article
                key={song.track}
                className="bg-[#F5EFE7] border border-[#E5DDD0] rounded-sm p-5 sm:p-6 transition-colors duration-150 hover:border-[#D6CBB8]"
              >
                <div className="flex items-baseline justify-between gap-4 mb-2">
                  <div className="flex items-baseline gap-3">
                    {/* Track Number */}
                    <span className="font-mono text-xs sm:text-sm text-[#9E3C32] font-semibold tabular-nums select-none">
                      {song.track}
                    </span>

                    {/* Song Title */}
                    <h2 className="font-serif text-xl sm:text-2xl text-[#381116] font-medium leading-snug">
                      {song.title}
                    </h2>
                  </div>
                </div>

                {/* Artist Name */}
                <p className="font-sans text-xs sm:text-sm text-[#6B5446] font-medium mb-3.5 pl-7 sm:pl-8">
                  {song.artist}
                </p>

                {/* Short Personal Note */}
                <p className="font-sans text-sm text-[#42332B] leading-relaxed mb-5 pl-7 sm:pl-8">
                  {song.note}
                </p>

                {/* Listen on YouTube Button */}
                <div className="pl-7 sm:pl-8">
                  <a
                    href={song.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 border border-[#9E3C32] text-[#9E3C32] hover:bg-[#9E3C32] hover:text-[#FAF7F2] active:bg-[#883229] active:text-[#FAF7F2] text-xs font-medium rounded-sm transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9E3C32] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F5EFE7]"
                  >
                    <span>Listen on YouTube</span>
                    <ExternalLink className="w-3.5 h-3.5 opacity-80" aria-hidden="true" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Section 4: Closing Message */}
        <footer className="pt-10 pb-8 border-t border-[#E8DEC8]">
          <p className="font-sans text-base sm:text-lg text-[#381116] leading-relaxed mb-4">
            I hope things go well for you in Turkey. Take care, Bung. See you when I see you.
          </p>
          <p className="font-sans text-sm sm:text-base text-[#6B5446] font-normal">
            From me, to you.
          </p>
        </footer>
      </main>
    </div>
  );
}
