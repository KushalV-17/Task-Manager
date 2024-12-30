import NewTask from "./NewTask.jsx";

export default function Task({ tasks, onAddt, onDeletet }) {
  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">TASK</h2>
      <NewTask onAdd={onAddt} />
      {tasks.length === 0 && (
        <p className="text-stone-800 my-4">
          This Project does not have any tasks yet.
        </p>
      )}
      {tasks.length > 0 && (
        <ul className="p-4 mt-8 ronuded-md bg-stone-100">
          {tasks.map((task) => (
            <li key={task.id} className="flex justify-between my-4">
              <span>{task.text}</span>
              <button
                className="text-stone-700 hover:text-red-500"
                onClick={() => onDeletet(task.id)}
              >
                Clear
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}