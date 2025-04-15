import { useGetPuppiesQuery } from "./puppySlice";

/**
 * @component
 * Shows a list of puppies in the roster.
 * Users can select a puppy to see more information about it.
 */
export default function PuppyList({ setSelectedPuppyId }) {
  // TODO: Get data from getPuppies query
  const { data: puppies = [], isLoading, isError } = useGetPuppiesQuery();

  if (isLoading) return <div className="loading">Loading puppies...</div>;
  if (isError) return <div className="error">Error loading puppies</div>;

  return (
    <div className="puppy-list">
      {puppies.map((p) => (
        <div 
          key={p.id} 
          className="puppy-card"
          onMouseEnter={() => setSelectedPuppyId(p.id)}
          onMouseLeave={() => setSelectedPuppyId(null)}
        >
          <img src={p.imageUrl} alt={p.name} />
          <div className="card-info">
            <h3>{p.name}</h3>
            <p>Breed: {p.breed}</p>
            <p>Status: {p.status || 'Active'}</p>
          </div>
        </div>
      ))}
    </div>
  );
}