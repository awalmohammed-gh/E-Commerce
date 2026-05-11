import { useEffect, useState } from "react";
import { listProduct, removeProduct } from "../api/authApis";
import toast from "react-hot-toast";
import { Plus, Trash2, Package, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ListProduct = () => {
  const [listData, setListData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const fetchProductData = async () => {
    try {
      const { data } = await listProduct();
      data.success ? setListData(data.products) : toast.error(data.message);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteProduct = async (id) => {
    try {
      const { data } = await removeProduct(id);
      if (data.success) {
        toast.success(data.message);
        fetchProductData();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchProductData();
  }, []);

  const filteredProducts = listData.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto p-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">
              Product Inventory
            </h1>
            <p className="text-gray-500 mt-1">
              Manage and track all your products
            </p>
          </div>
          <button
            onClick={() => navigate("/add")}
            className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2.5 rounded-lg hover:bg-blue-700 transition shadow-sm hover:shadow-md"
          >
            <Plus size={18} /> Add New Product
          </button>
        </div>

        {/* Search Bar */}
        <div className="mb-6">
          <div className="relative max-w-md">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              size={18}
            />
            <input
              type="text"
              placeholder="Search by product name or category..."
              className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Total Products</p>
                <p className="text-2xl font-bold text-gray-800">
                  {listData.length}
                </p>
              </div>
              <Package className="text-blue-500" size={24} />
            </div>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Bestsellers</p>
                <p className="text-2xl font-bold text-gray-800">
                  {listData.filter((p) => p.bestseller).length}
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">New Arrivals</p>
                <p className="text-2xl font-bold text-gray-800">
                  {listData.filter((p) => p.newArrival).length}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Products Grid - Mobile View */}
        <div className="block lg:hidden space-y-4">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div
                key={product._id}
                className="bg-white rounded-lg shadow-sm border border-gray-100 p-4"
              >
                <div className="flex gap-4">
                  <img
                    src={product.image[0]}
                    alt={product.name}
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800">
                      {product.name}
                    </h3>
                    <p className="text-sm text-gray-500">{product.category}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-green-600 font-bold">
                        {product.new_price.toLocaleString("en", {
                          style: "currency",
                          currency: "GHS",
                        })}
                      </span>
                      <span className="text-sm line-through text-gray-400">
                        {product.old_price.toLocaleString("en", {
                          style: "currency",
                          currency: "GHS",
                        })}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {product.sizes.map((s, i) => (
                        <span
                          key={i}
                          className="bg-gray-100 px-2 py-0.5 text-xs rounded"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex gap-1">
                        {product.bestseller && (
                          <span className="bg-green-100 text-green-700 px-2 py-0.5 text-xs rounded">
                            Bestseller
                          </span>
                        )}
                        {product.newArrival && (
                          <span className="bg-blue-100 text-blue-700 px-2 py-0.5 text-xs rounded">
                            New
                          </span>
                        )}
                      </div>
                      <button
                        onClick={() => {
                          if (
                            confirm(
                              "Are you sure you want to delete this product?",
                            )
                          ) {
                            deleteProduct(product._id);
                          }
                        }}
                        className="p-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-12">
              <Package className="mx-auto text-gray-300 mb-3" size={48} />
              <p className="text-gray-500">No products found</p>
            </div>
          )}
        </div>

        {/* Table View - Desktop */}
        <div className="hidden lg:block bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="text-left p-4 font-semibold text-gray-700">
                    Product
                  </th>
                  <th className="text-left p-4 font-semibold text-gray-700">
                    Category
                  </th>
                  <th className="text-left p-4 font-semibold text-gray-700">
                    Old Price
                  </th>
                  <th className="text-left p-4 font-semibold text-gray-700">
                    New Price
                  </th>
                  <th className="text-left p-4 font-semibold text-gray-700">
                    Sizes
                  </th>
                  <th className="text-left p-4 font-semibold text-gray-700">
                    Status
                  </th>
                  <th className="text-center p-4 font-semibold text-gray-700">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filteredProducts.length > 0 ? (
                  filteredProducts.map((product) => (
                    <tr
                      key={product._id}
                      className="hover:bg-gray-50 transition"
                    >
                      <td className="p-4">
                        <div className="flex items-center gap-3">
                          <img
                            src={product.image[0]}
                            alt={product.name}
                            className="w-10 h-10 object-cover rounded"
                          />
                          <span className="font-medium text-gray-800">
                            {product.name}
                          </span>
                        </div>
                      </td>
                      <td className="p-4 text-gray-600">{product.category}</td>
                      <td className="p-4 text-gray-400 line-through">
                        {product.old_price.toLocaleString("en", {
                          style: "currency",
                          currency: "GHS",
                        })}
                      </td>
                      <td className="p-4 text-green-600 font-semibold">
                        {product.new_price.toLocaleString("en", {
                          style: "currency",
                          currency: "GHS",
                        })}
                      </td>
                      <td className="p-4">
                        <div className="flex gap-1 flex-wrap">
                          {product.sizes.map((s, i) => (
                            <span
                              key={i}
                              className="bg-gray-100 px-2 py-1 text-xs rounded"
                            >
                              {s}
                            </span>
                          ))}
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="flex gap-1 flex-wrap">
                          {product.bestseller && (
                            <span className="bg-green-100 text-green-700 px-2 py-1 text-xs rounded">
                              Bestseller
                            </span>
                          )}
                          {product.newArrival && (
                            <span className="bg-blue-100 text-blue-700 px-2 py-1 text-xs rounded">
                              New
                            </span>
                          )}
                          {!product.bestseller && !product.newArrival && (
                            <span className="bg-gray-100 text-gray-600 px-2 py-1 text-xs rounded">
                              Normal
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="p-4 text-center">
                        <button
                          onClick={() => {
                            if (
                              confirm(
                                "Are you sure you want to delete this product?",
                              )
                            ) {
                              deleteProduct(product._id);
                            }
                          }}
                          className="inline-flex items-center justify-center p-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition"
                        >
                          <Trash2 size={16} />
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="7" className="text-center py-12">
                      <Package
                        className="mx-auto text-gray-300 mb-3"
                        size={48}
                      />
                      <p className="text-gray-500">No products found</p>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListProduct;
