import React from "react";
import { useForm } from "react-hook-form";
import SecTitile from "../../../components/SecTitile";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const AddItems = () => {
  //   const { register, handleSubmit } = useForm();
  //   const onSubmit = (data) => {
  //     console.log(data);
  //     console.log("hellow");
  //   };

  const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
  const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  

  const onSubmit = async (data) => {
    console.log(data)
    const imageFile = {image:data.image[0]}
    const res = await axiosPublic.post(image_hosting_api,imageFile,{
        headers: {
           " content-type":'multipart/form-data'
        }

        
    })
    if(res.data.success){
      const menuItem = {
        name:data.name,
        category:data.category,
        price:parseFloat(data.price),
        image:res.data.data.display_url

      }
      // 
      const menuRes = await axiosSecure.post('/menu', menuItem);
      console.log(menuRes.data)
      if(menuRes.data.insertedId){
        reset()
        Swal.fire({
          position: "top-end",
          icon: "success",
          title:  `${data.name} is added to the menu`,
          showConfirmButton: false,
          timer: 1500
        });
      }
    }
    console.log('with img url',res.data)
  };
  return (
    <div>
      <SecTitile heading="ADD AN ITEM" subHeading="whats new"></SecTitile>
      {/* <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input {...register("firstName")} />
          <select {...register("gender")}>
            <option value="female">female</option>
            <option value="male">male</option>
            <option value="other">other</option>
          </select>
          <input type="submit" />
        </form>
      </div> */}
      <div>
        <div className="max-w-lg mx-auto bg-gray-100 p-6 rounded-lg shadow-md">
          {/* <form onSubmit={handleSubmit(onSubmit)}>
           
            <div className="mb-4">
              <label
                htmlFor="recipeName"
                className="block text-sm font-medium text-gray-700"
              >
                Recipe name<span className="text-red-500">*</span>
              </label>
              <input
                {...register("name")}
                id="name"
                type="text"
                name="name"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Recipe name"
              />
            </div>

         
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label
                  htmlFor="category"
                  className="block text-sm font-medium text-gray-700"
                >
                  Category<span className="text-red-500">*</span>
                </label>
                <select
                  id="category"
                  name="category"
                  {...register("category", { required: true })}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-500 focus:border-indigo-500"
                >
                  <option value="">Select category</option>
                  <option value="salad">Salad</option>
                  <option value="pizza">Pizza</option>
                  <option value="dessert">Dessert</option>
                  <option value="soup">Soup</option>
                  <option value="drinks">drinks</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="price"
                  className="block text-sm font-medium text-gray-700"
                >
                  Price<span className="text-red-500">*</span>
                </label>
                <input
                  id="price"
                  {...register("price", { required: true })}
                  type="number"
                  name="price"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Price"
                />
              </div>
            </div>

        
            <div className="mb-4">
              <label
                htmlFor="recipeDetails"
                className="block text-sm font-medium text-gray-700"
              >
                Recipe Details<span className="text-red-500">*</span>
              </label>
              <textarea
                {...register("recipe", { required: true })}
                id="recipeDetails"
                name="recipeDetails"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Recipe Details"
              ></textarea>
            </div>

         
            <div className="mb-4">
              <label
                htmlFor="fileUpload"
                className="block text-sm font-medium text-gray-700"
              >
                Upload File
              </label>
              <input
                {...register("image")}
                id="fileUpload"
                type="file"
                name="fileUpload"
                className="mt-1 block w-full text-gray-700 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

          
  
            <button
              type="submit"
              className="w-full bg-yellow-600 text-white font-bold py-2 px-4 rounded-md hover:bg-yellow-700 flex items-center justify-center"
            >
              Add Item <span className="ml-2">🍴</span>
            </button>
          </form> */}
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label
                htmlFor="recipeName"
                className="block text-sm font-medium text-gray-700"
              >
                Recipe name<span className="text-red-500">*</span>
              </label>
              <input
                {...register("name", { required: true })}
                id="name"
                type="text"
                name="name"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Recipe name"
              />
              {errors.name && <span>This field is required</span>}
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label
                  htmlFor="category"
                  className="block text-sm font-medium text-gray-700"
                >
                  Category<span className="text-red-500">*</span>
                </label>
                <select
                  id="category"
                  name="category"
                  {...register("category", { required: true })}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-500 focus:border-indigo-500"
                >
                  <option value="">Select category</option>
                  <option value="salad">Salad</option>
                  <option value="pizza">Pizza</option>
                  <option value="dessert">Dessert</option>
                  <option value="soup">Soup</option>
                  <option value="drinks">drinks</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="price"
                  className="block text-sm font-medium text-gray-700"
                >
                  Price<span className="text-red-500">*</span>
                </label>
                <input
                  id="price"
                  {...register("price", { required: true })}
                  type="number"
                  name="price"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Price"
                />
              </div>
            </div>

            <div className="mb-4">
              <label
                htmlFor="recipeDetails"
                className="block text-sm font-medium text-gray-700"
              >
                Recipe Details<span className="text-red-500">*</span>
              </label>
              <textarea
                {...register("recipe", { required: true })}
                id="recipeDetails"
                name="recipe"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Recipe Details"
              ></textarea>
            </div>

            <div className="mb-4">
              <label
                htmlFor="fileUpload"
                className="block text-sm font-medium text-gray-700"
              >
                Upload File
              </label>
              <input
                {...register("image", { required: true })}
                id="fileUpload"
                type="file"
                name="image"
                className="mt-1 block w-full text-gray-700 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            {/* <input defaultValue="test" {...register("example")} />

            <input {...register("exampleRequired", { required: true })} />

            {errors.exampleRequired && <span>This field is required</span>} */}

            <input
              className="w-full bg-yellow-600 text-white font-bold py-2 px-4 rounded-md hover:bg-yellow-700 flex items-center "
              type="submit"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddItems;
