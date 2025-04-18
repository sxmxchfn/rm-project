import React from "react";

type FilterState = {
  // структура нашего фильтра
  gender: string;
  status: string;
  species: string;
};

type CharFilterProps = {
  filters: FilterState; // текущее состояние фильтра
  onFilterChange: (filterName: keyof FilterState, value: string) => void; // функция для изменения фильтра
  onReset: () => void; // функция для сброса фильтра
};

const CharFilter: React.FC<CharFilterProps> = ({
  filters,
  onFilterChange,
  onReset,
}) => {
  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    onFilterChange(name as keyof FilterState, value);
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="max-w-md mx-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-white text-xl font-bold font-sg">
            Filter Characters
          </h2>
          <button
            onClick={onReset}
            className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-sg"
          >
            Reset Filters
          </button>
        </div>

        {/* Gender Filter */}
        <div className="mb-4">
          <label
            htmlFor="gender"
            className="block text-white text-lg font-medium mb-2 font-sg"
          >
            Gender
          </label>
          <div className="relative">
            <select
              id="gender"
              name="gender"
              value={filters.gender}
              onChange={handleFilterChange}
              className="block w-full bg-purple-800 bg-opacity-50 text-white border border-purple-500 rounded-lg py-3 px-4 appearance-none focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent font-sg"
            >
              <option value="">All Genders</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="unknown">Unknown</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
              <svg
                className="fill-current h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Status Filter */}
        <div className="mb-4">
          <label
            htmlFor="status"
            className="block text-white text-lg font-medium mb-2 font-sg"
          >
            Status
          </label>
          <div className="relative">
            <select
              id="status"
              name="status"
              value={filters.status}
              onChange={handleFilterChange}
              className="block w-full bg-purple-800 bg-opacity-50 text-white border border-purple-500 rounded-lg py-3 px-4 appearance-none focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent font-sg"
            >
              <option value="">All Statuses</option>
              <option value="alive">Alive</option>
              <option value="dead">Dead</option>
              <option value="unknown">Unknown</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
              <svg
                className="fill-current h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Species Filter */}
        <div className="mb-4">
          <label
            htmlFor="species"
            className="block text-white text-lg font-medium mb-2 font-sg"
          >
            Species
          </label>
          <div className="relative">
            <select
              id="species"
              name="species"
              value={filters.species}
              onChange={handleFilterChange}
              className="block w-full bg-purple-800 bg-opacity-50 text-white border border-purple-500 rounded-lg py-3 px-4 appearance-none focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent font-sg"
            >
              <option value="">All Species</option>
              <option value="human">Human</option>
              <option value="alien">Alien</option>
              <option value="humanoid">Humanoid</option>
              <option value="robot">Robot</option>
              <option value="animal">Animal</option>
              <option value="mythological">Mythological</option>
              <option value="unknown">Unknown</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
              <svg
                className="fill-current h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharFilter;
