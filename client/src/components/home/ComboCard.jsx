const ComboCard = ({ combo }) => {
  return (
    <div className="bg-white p-4 rounded-xl shadow-sm border">
      <h2 className="text-lg font-semibold text-green-600">
        {combo.name}
      </h2>

      <p className="text-sm text-gray-500 mt-1">
        {combo.desc}
      </p>

      <div className="mt-3 flex justify-between items-center">
        <span className="font-bold">₹{combo.price}</span>
        <button className="bg-green-600 text-white px-3 py-1 rounded-lg text-sm">
          View
        </button>
      </div>
    </div>
  );
};

export default ComboCard;