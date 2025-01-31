export default function Counter() {
    return (
      <div
        
        className="bg-white p-6 rounded-lg shadow-xl inline-block mx-auto "
      >
        <div className=" text-2xl md:text-4xl font-bold text-red-600">
          {9 ? `${9} / 150 عبوة متبقية ` : "لقد نفدت الكمية"}
        </div>
      </div>
    );
  }
  