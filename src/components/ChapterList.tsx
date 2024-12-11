import { useState } from 'react';
import { chapters } from '../data/chapters';

interface ChapterListProps {
  onSelect: (chapter: typeof chapters[0]) => void;
}

export function ChapterList({ onSelect }: ChapterListProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedJuz, setSelectedJuz] = useState<string | null>(null);

  // Définir les plages de Juz
  const juzRanges = [
    { label: 'Juz 1-5', range: [1, 5] },
    { label: 'Juz 6-10', range: [6, 10] },
    { label: 'Juz 11-15', range: [11, 15] },
    { label: 'Juz 16-20', range: [16, 20] },
    { label: 'Juz 21-25', range: [21, 25] },
    { label: 'Juz 26-30', range: [26, 30] },
  ];

  // Filtrer les chapitres en fonction de la recherche et du Juz sélectionné
  const filteredChapters = chapters.filter((chapter) => {
    const matchesSearch = chapter.name.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesJuz =
      selectedJuz === null || // Si aucun Juz n'est sélectionné
      (selectedJuz && chapter.juz.some(juz => juz >= selectedJuz[0] && juz <= selectedJuz[1])); // Vérifie si un des Juz correspond

    return matchesSearch && matchesJuz;
  });

  // Fonction de sélection d'un chapitre
  const handleSelectChapter = (chapter: typeof chapters[0]) => {
    onSelect(chapter);
  };

  // Gérer la sélection d'une plage de Juz
  const handleJuzSelect = (range: [number, number]) => {
    setSelectedJuz(range);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h3 className="text-xl font-semibold text-emerald-900 mb-4">Sourates</h3>

      <div className="flex justify-between gap-4">
        {/* Recherche par nom */}
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Rechercher une sourate"
          className="w-full p-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
        />
        
        {/* Filtre par plage de Juz */}
        <select
          value={selectedJuz ? `${selectedJuz[0]}-${selectedJuz[1]}` : ''}
          onChange={(e) => {
            const range = e.target.value
              ? e.target.value.split('-').map(Number) as [number, number]
              : null;
            setSelectedJuz(range);
          }}
          className="w-full p-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
        >
          <option value="">Tous les Juz</option>
          {juzRanges.map((range) => (
            <option key={range.label} value={`${range.range[0]}-${range.range[1]}`}>
              {range.label}
            </option>
          ))}
        </select>
      </div>

      {/* Liste des chapitres */}
      <div className="space-y-2 max-h-96 overflow-y-auto">
        {filteredChapters.map((chapter) => (
          <button
            key={chapter.id}
            onClick={() => handleSelectChapter(chapter)}
            className="w-full text-left p-3 hover:bg-emerald-50 rounded-lg transition-colors"
          >
            <span className="font-medium text-emerald-800">{chapter.number}.</span>
            <span className="ml-2 text-gray-700">{chapter.name}</span>
          </button>
        ))}

        {filteredChapters.length === 0 && (
          <p className="text-gray-500 text-center">Aucune sourate trouvée.</p>
        )}
      </div>
    </div>
  );
}
