export default function EmptyState({ setOpen, setPrompt }) {
  return (
    <div className="flex gap-x-4 mb-8">
      <span className="text-xl sm:text-2xl pt-4" title="AI">
        🦙
      </span>
      <div className="flex flex-col text-sm sm:text-base flex-1 gap-y-4 mt-1 rounded-lg bg-gray-100 py-5 px-5">
        <p>I&apos;m a banglish sentiment analyser</p>
        <p>How can I help you today?</p>
      </div>
    </div>
  );
}
