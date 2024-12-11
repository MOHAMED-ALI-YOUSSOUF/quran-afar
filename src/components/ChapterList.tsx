import { chapters } from '../data/chapters';

interface ChapterListProps {
  onSelect: (chapter: typeof chapters[0]) => void;
}

export function ChapterList({ onSelect }: ChapterListProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h3 className="text-xl font-semibold text-emerald-900 mb-4">Sourates</h3>
      <div className="space-y-2 max-h-96 overflow-y-auto">
        {chapters.map((chapter) => (
          <button
            key={chapter.id}
            onClick={() => onSelect(chapter)}
            className="w-full text-left p-3 hover:bg-emerald-50 rounded-lg transition-colors"
          >
            <span className="font-medium text-emerald-800">{chapter.number}.</span>
            <span className="ml-2 text-gray-700">{chapter.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}