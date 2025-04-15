import { useGetPuppyQuery } from "./puppySlice";

/** 
 * @component
 * Shows comprehensive information about the selected puppy, if there is one.
 */
export default function PuppyDetails({ selectedPuppyId }) {
  // TODO: Grab data from the `getPuppy` query
  const { data: puppy } = useGetPuppyQuery(selectedPuppyId);

  if (!selectedPuppyId) return null;

  return (
    <div className={`puppy-details ${puppy ? 'visible' : ''}`}>
      {puppy && (
        <>
          <img src={puppy.imageUrl} alt={puppy.name} />
          <div className="details-info">
            <h2>{puppy.name}</h2>
            <p>ID: #{puppy.id}</p>
            <p>Breed: {puppy.breed}</p>
            <p>Team: {puppy.team?.name || 'Unassigned'}</p>
          </div>
        </>
      )}
    </div>
  );
}