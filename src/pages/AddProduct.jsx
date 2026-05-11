import { useEffect, useState } from "react";
import {
  Upload,
  X,
  Plus,
  Tag,
  Layers,
  DollarSign,
  Check,
} from "lucide-react";
import { addProduct } from "../api/authApis";
import toast from "react-hot-toast";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [old_price, setOldPrice] = useState(0);
  const [new_price, setNewPrice] = useState(0);
  const [sizes, setSizes] = useState([]);
  const [bestseller, setBestseller] = useState(false);
  const [newArrival, setNewArrival] = useState(false);

  const [images, setImages] = useState([null, null, null, null]);
  const [preview, setPreview] = useState([null, null, null, null]);

  const sizeOptions = ["S", "L", "XL", "XXL", "XXXL"];

  // 📸 Handle Image Upload
  const handleImages = (e, index) => {
    const file = e.target.files[0];
    if (!file) return;

    setImages((prev) => {
      const updated = [...prev];
      updated[index] = file;
      return updated;
    });
  };

  // Remove Image
  const removeImage = (index) => {
    setImages((prev) => {
      const updated = [...prev];
      updated[index] = null;
      return updated;
    });
  };

  // Preview Images
  useEffect(() => {
    const urls = images.map((img) => (img ? URL.createObjectURL(img) : null));
    setPreview(urls);

    return () => {
      urls.forEach((url) => {
        if (url) URL.revokeObjectURL(url);
      });
    };
  }, [images]);

  // Handle Sizes
  const toggleSize = (s) => {
    setSizes((prev) =>
      prev.includes(s) ? prev.filter((item) => item !== s) : [...prev, s],
    );
  };

  // Submit
  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      
      const formData = new FormData();

    formData.append("name", name);
    formData.append("category", category);
    formData.append("description", description);
    formData.append("old_price", old_price);
    formData.append("new_price", new_price);
    formData.append("sizes", JSON.stringify(sizes));
    formData.append("bestseller", bestseller);
    formData.append("newArrival", newArrival);

    
    images.forEach((img, index) => {
      formData.append(`image${index + 1}`, img);
    });

    const {data} = await addProduct(formData);
    if(data.success){
      toast.success(data.message);

      setName("");
      setCategory("");
      setDescription("");
      setNewPrice(0)
      setOldPrice(0);
      setSizes([])
      setBestseller(false);
      setNewArrival(false);
      setImages([null,null,null,null])
    }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Add New Product</h2>
          <p className="text-gray-500 mt-1">
            Fill in the product details below
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Form - Left Side */}
          <div className="lg:col-span-2 space-y-6">
            {/* Basic Information Card */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center gap-2 mb-4">
                <Tag className="w-5 h-5 text-gray-600" />
                <h3 className="text-lg font-semibold text-gray-800">
                  Basic Information
                </h3>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Product Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., Classic White T-Shirt"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Category
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., Men's Clothing, Electronics, Shoes"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Description
                  </label>
                  <textarea
                    placeholder="Describe your product in detail..."
                    rows="4"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition resize-none"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
              </div>
            </div>

            {/* Pricing Card */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center gap-2 mb-4">
                <DollarSign className="w-5 h-5 text-gray-600" />
                <h3 className="text-lg font-semibold text-gray-800">Pricing</h3>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Original Price
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                      GHS
                    </span>
                    <input
                      type="number"
                      placeholder="0.00"
                      className="w-full pl-8 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                      value={old_price}
                      onChange={(e) => setOldPrice(e.target.value)}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Sale Price
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                      GHS
                    </span>
                    <input
                      type="number"
                      placeholder="0.00"
                      className="w-full pl-8 pr-4 py-2.5 border border-green-500 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition"
                      value={new_price}
                      onChange={(e) => setNewPrice(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Sizes Card */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center gap-2 mb-4">
                <Layers className="w-5 h-5 text-gray-600" />
                <h3 className="text-lg font-semibold text-gray-800">
                  Available Sizes
                </h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {sizeOptions.map((s) => (
                  <button
                    type="button"
                    key={s}
                    onClick={() => toggleSize(s)}
                    className={`
                      relative w-14 h-14 rounded-xl font-medium transition-all duration-200
                      ${
                        sizes.includes(s)
                          ? "bg-blue-600 text-white shadow-md scale-105"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-300"
                      }
                    `}
                  >
                    {s}
                    {sizes.includes(s) && (
                      <Check className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 text-white rounded-full p-0.5" />
                    )}
                  </button>
                ))}
              </div>
              {sizes.length > 0 && (
                <p className="text-sm text-gray-500 mt-3">
                  Selected: {sizes.join(", ")}
                </p>
              )}
            </div>
          </div>

          {/* Right Side - Images & Flags */}
          <div className="space-y-6">
            {/* Images Card */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center gap-2 mb-4">
                <Upload className="w-5 h-5 text-gray-600" />
                <h3 className="text-lg font-semibold text-gray-800">
                  Product Images
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {images.map((_, index) => (
                  <div key={index} className="relative">
                    {preview[index] ? (
                      <div className="relative group">
                        <img
                          src={preview[index]}
                          alt={`preview ${index + 1}`}
                          className="w-full h-32 object-cover rounded-lg border border-gray-200"
                        />
                        <button
                          type="button"
                          onClick={() => removeImage(index)}
                          className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </div>
                    ) : (
                      <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-blue-500 transition group">
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                          <Plus className="w-8 h-8 text-gray-400 group-hover:text-blue-500" />
                          <p className="text-xs text-gray-500 mt-1">Upload</p>
                        </div>
                        <input
                          type="file"
                          className="hidden"
                          accept="image/*"
                          onChange={(e) => handleImages(e, index)}
                        />
                      </label>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Flags Card */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Product Tags
              </h3>

              <div className="space-y-3">
                <label className="flex items-center justify-between p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition">
                  <div>
                    <span className="font-medium text-gray-700">
                      Bestseller
                    </span>
                    <p className="text-xs text-gray-500">
                      Mark as top selling product
                    </p>
                  </div>
                  <div className="relative">
                    <input
                      type="checkbox"
                      className="sr-only"
                      checked={bestseller}
                      onChange={() => setBestseller(!bestseller)}
                    />
                    <div
                      className={`w-10 h-5 rounded-full transition ${bestseller ? "bg-blue-600" : "bg-gray-300"}`}
                    >
                      <div
                        className={`w-4 h-4 bg-white rounded-full transition-transform duration-200 transform ${bestseller ? "translate-x-5" : "translate-x-1"} mt-0.5`}
                      />
                    </div>
                  </div>
                </label>

                <label className="flex items-center justify-between p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition">
                  <div>
                    <span className="font-medium text-gray-700">
                      New Arrival
                    </span>
                    <p className="text-xs text-gray-500">
                      Mark as recently added
                    </p>
                  </div>
                  <div className="relative">
                    <input
                      type="checkbox"
                      className="sr-only"
                      checked={newArrival}
                      onChange={() => setNewArrival(!newArrival)}
                    />
                    <div
                      className={`w-10 h-5 rounded-full transition ${newArrival ? "bg-blue-600" : "bg-gray-300"}`}
                    >
                      <div
                        className={`w-4 h-4 bg-white rounded-full transition-transform duration-200 transform ${newArrival ? "translate-x-5" : "translate-x-1"} mt-0.5`}
                      />
                    </div>
                  </div>
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-xl transition duration-200 shadow-sm hover:shadow-md"
            >
              Add Product
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default AddProduct;
