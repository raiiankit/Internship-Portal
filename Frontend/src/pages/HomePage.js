import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [empData, setEmpData] = useState([]);

  const getAllData = async () => {
    try {
      const getPeople = await fetch (
        `${process.env.REACT_APP_BASE_URL}/getallUsers`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const res = await getPeople.json();
      setEmpData(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllData();
  }, []);

  console.log(empData);

  

  return (
    <section className="container px-4 mx-auto py-4">
      <div className="flex items-center justify-between">
        <div>
        <div className="relative items-center justify-center text-white bg-black-100 ml-[584px]">
                 <h1 className="text-4xl font-bold text-center">
                         Internship Portal
                        </h1>
                  </div>

          
        </div>
        <div className="relative flex space-x-4">
          <Link to="/addemployee">
            <button className="rounded-md bg-indigo-600 px-3.5 py-1.5 text-sm font-semibold leading-7 text-white hover:bg-indigo-500">
              Add Employee
            </button>
          </Link>
          <Link to = "/delete">
          <button className="rounded-md bg-red-600 px-3.5 py-1.5 text-sm font-semibold leading-7 text-white hover:bg-red-500">
            Delete
          </button>
          </Link>
        </div>
      </div>

      <div className="flex flex-col mt-6">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead className="bg-gray-50 dark:bg-gray-800">
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                    >
                      <span>Unique Id</span>
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                    >
                      <span>Employee</span>
                    </th>
                    <th
                      scope="col"
                      className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                    >
                      Title
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                    >
                      Role
                    </th>
                  </tr>
                </thead>

                <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                  {empData?.data?.map((person) => (
                    <tr key={person._id}>
                      <div className="text-sm font-medium text-orange-900 dark:text-white mt-5 ml-5">
                      Id : {person._id}
                      </div>
                      <td className="py-4 px-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10">
                            <img
                              className="h-10 w-10 rounded-full object-cover"
                              src={person.image}
                              alt=""
                            />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900 dark:text-white">
                              {person.name}
                            </div>
                            <div className="text-sm text-gray-500 dark:text-gray-300">
                              {person.email}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-12 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900 dark:text-white">
                          {person.title}
                        </div>
                        <div className="text-sm text-gray-500 dark:text-gray-300">
                          {person.department}
                        </div>
                      </td>

                      <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                        {person.role}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <footer className="bg-gray-800 text-white py-4">
  <div className="container text-center">
    <p className="text-sm">
      &copy; {new Date().getFullYear()} Internship Portal. All rights reserved.
    </p>
  </div>
</footer>
    </section>
  );

  






};

export default HomePage;


