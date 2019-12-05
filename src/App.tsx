import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

const App: React.FC = () => {
  const [state, setState] = useState({
    sidePanel: false
  });
  return (
    <div className="App">
      <div className={"h-screen flex"}>
        <div className={`${state.sidePanel ? "block" : "hidden"} fixed inset-0 bg-black opacity-75`}></div>
        <div className={`${state.sidePanel ? 'animate-ease-in animate-medium animate-show'  : 'animate-ease-out animate-medium animate-hide'} lg:static fixed z-30  left-0 w-64 px-8 py-4 bg-gray-100 border-r overflow-auto lg:animate-show`}>
          <div className={"-mx-1 flex items-center justify-between"}>
            <img className={"h-8 w-8"} src={logo} alt="logo"/>
            <button className="text-gray-700 lg:hidden" onClick={(e) => { setState({...state, sidePanel: false}); console.log("state : ",state) }}>
              <svg className={"h-6 w-6"} viewBox="0 0 24 24" fill="none">
                <path
                  d="M6 18L18 6M6 6L18 18"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  stroke="currentColor"
                />
              </svg>
            </button>
          </div>
          <nav className={"mt-8"}>
            <h3 className={"text-xs font-semibold text-gray-600 uppercase tracking-wide text-left"}>Issues</h3>
            <div className={"mt-2 -mx-3"}>
              <a href="#" className={"flex justify-between items-center px-3 py-2 bg-gray-200 rounded-lg"}>
                <span className={"text-sm font-medium text-gray-900 "}>All</span>
                <span className={"text-xs font-semibold text-gray-700 "}>36</span>
              </a>  
              <a href="#" className={"flex justify-between items-center px-3 py-2 rounded-lg"}>
                <span className={"text-sm font-medium text-gray-700 "}>Assigned to me</span>
                <span className={"text-xs font-semibold text-gray-700 "}>2</span>
              </a>  
              <a href="#" className={"flex justify-between items-center px-3 py-2 rounded-lg"}>
                <span className={"text-sm font-medium text-gray-700 "}>Created by me</span>
                <span className={"text-xs font-semibold text-gray-700 "}>2</span>
              </a>  
              <a href="#" className={"flex justify-between items-center px-3 py-2 rounded-lg"}>
                <span className={"text-sm font-medium text-gray-700 "}>Archived</span>
                <span className={"text-xs font-semibold text-gray-700 "}>1</span>
              </a>  
            </div>
            <h3 className={"mt-8 text-xs font-semibold text-gray-600 uppercase tracking-wide text-left"}>Tags</h3>
            <div className={"mt-2 -mx-3"}>
              <a href="#" className={"flex justify-between items-center px-3 py-2 rounded-lg"}>
                <span className={"text-sm font-medium text-gray-700 "}>Bug</span>
              </a>
              <a href="#" className={"flex justify-between items-center px-3 py-2 rounded-lg"}>
                <span className={"text-sm font-medium text-gray-700 "}>Feature Request</span>
              </a>
              <a href="#" className={"flex justify-between items-center px-3 py-2 rounded-lg"}>
                <span className={"text-sm font-medium text-gray-700 "}>Marketing</span>
              </a>
              <a href="#" className={"flex justify-between items-center px-3 py-2 rounded-lg"}>
                <span className={"text-sm font-medium text-gray-700 "}>v2.0</span>
              </a>
              <a href="#" className={"flex justify-between items-center px-3 py-2 rounded-lg"}>
                <span className={"text-sm font-medium text-gray-700 "}>Enhancement</span>
              </a>
              <a href="#" className={"flex justify-between items-center px-3 py-2 rounded-lg"}>
                <span className={"text-sm font-medium text-gray-700 "}>Design</span>
              </a>   
            </div>
            <button className={" mt-4 -ml-1 flex items-center text-sm font-medium text-gray-600"}>
              <svg className={"h-5 w-5 text-gray-500"} viewBox="0 0 24 24" fill="none">
                <path 
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  d="M12 7v10m5-5H7"
                />
              </svg>
              <span className={"ml-1"}>New Project</span>
            </button>
          </nav>
        </div>
        <div className={"flex-1 min-w-0 bg-white flex flex-col"}>
          <div className={"flex-shrink-0 sm:border-b-2 sm:border-gray-200"}>
            <header>
              <div className={"px-6"}>
                <div className={"flex justify-between items-center border-b border-gray-200 py-2"}>
                  {/* right */}
                  <div className={"flex-1 min-w-0 flex"}>
                    <button className={"text-gray-600 lg:hidden"} onClick={(e) => { 
                      setState({...state, sidePanel: true}) 
                      console.log("click", state);
                    }}>
                      <svg className={"h-6 w-6"} viewBox="0 0 24 24" fill="none">
                        <path
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          d="M4 6h16M4 12h16M4 18h7"
                        />
                      </svg>
                    </button>
                    <div className={"flex-shrink-1 ml-3 lg:ml-0 relative w-64"}>
                      <span className={"absolute pl-3 inset-y-0 left-0 flex items-center"}>
                        
                        <svg className={"h-6 w-6 text-gray-600"} viewBox="0 0 24 24" fill="none">
                          <path
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                          />
                        </svg>
                      </span>
                      <input 
                        className={"block w-full rounded-lg border border-gray-400 pl-10 pr-4 py-2 text-gray-900 text-sm placeholder-gray-600"} 
                        placeholder="Search"  
                      />
                    </div>
                  </div>
                  {/* right end */}
                  <div className={"ml-6 flex-shrink-0 flex items-center"}>
                    <button className={""}>
                      <svg className="h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path stroke="currentColor" d="M468 392h-20c-10.384 0-18.709-3.609-24.745-10.728-7.363-8.684-11.255-22.386-11.255-39.626V204c0-78.818-59.543-144.777-136-154.699V0h-40v49.301C159.543 59.223 100 125.181 100 204v144c0 14.175-3.734 25.775-10.799 33.546C82.984 388.385 74.27 392 64 392H44v56h161.413A51.888 51.888 0 00204 460c0 28.673 23.327 52 52 52s52-23.327 52-52c0-4.131-.499-8.145-1.413-12H468v-56zm-212 80c-6.617 0-12-5.383-12-12s5.383-12 12-12 12 5.383 12 12-5.383 12-12 12zm-136.792-64C132.813 392.784 140 372.052 140 348V204c0-63.067 51.263-115.072 114.302-115.987h3.396C320.737 88.928 372 140.933 372 204v137.646c0 26.84 7.174 49.488 20.745 65.494.245.289.492.576.741.86H119.208z"/>
                      </svg>
                    </button>
                    <button className={"ml-6"}>
                      <img className={"h-8 w-8 rounded-full object-cover"} src="https://i.pravatar.cc/100" alt="avatar"/>
                    </button>
                  </div>
                </div>

                <div className={"flex justify-between items-center py-2"}>
                  <div className={"sm:ml-1 lg:flex lg:items-center lg:ml-6"}>
                    <h2 className={"text-2xl font-semibold text-gray-900 leading-tight"}>All Issues</h2>
                    <div className={"sm:mt-1 flex ml-1 lg:ml-6"}>
                      <span className={"-ml-2 rounded-full border-2 border-white"}>
                        <img className={"h-6 w-6 rounded-full object-cover"} src="https://i.pravatar.cc/100" alt="avatar"/>
                      </span>
                      <span className={"-ml-2 rounded-full border-2 border-white"}>
                        <img className={"h-6 w-6 rounded-full object-cover"} src="https://i.pravatar.cc/100" alt="avatar"/>
                      </span>
                      <span className={"-ml-2 rounded-full border-2 border-white"}>
                        <img className={"h-6 w-6 rounded-full object-cover"} src="https://i.pravatar.cc/100" alt="avatar"/>
                      </span>
                      <span className={"-ml-2 rounded-full border-2 border-white"}>
                        <img className={"h-6 w-6 rounded-full object-cover"} src="https://i.pravatar.cc/100" alt="avatar"/>
                      </span>
                    </div>
                  </div>
                  <div className={"flex"}>
                    <span className={"hidden sm:inline-flex p-1 border bg-gray-200 rounded"}>
                      <button className={"px-2 py-1 rounded"}>
                        <svg className={" h-6 w-6 text-gray-600 "} height="512" viewBox="0 -53 384 384" width="512" xmlns="http://www.w3.org/2000/svg">
                          <path stroke="currentColor" d="M368 154.668H16c-8.832 0-16-7.168-16-16s7.168-16 16-16h352c8.832 0 16 7.168 16 16s-7.168 16-16 16zm0 0M368 32H16C7.168 32 0 24.832 0 16S7.168 0 16 0h352c8.832 0 16 7.168 16 16s-7.168 16-16 16zm0 0M368 277.332H16c-8.832 0-16-7.168-16-16s7.168-16 16-16h352c8.832 0 16 7.168 16 16s-7.168 16-16 16zm0 0"/>
                        </svg>
                      </button>
                      <button className={"px-2 py-1 bg-white shadow rounded"}>
                        <svg className={" h-6 w-6 text-gray-600 "} height="512" viewBox="0 -53 384 384" width="512" xmlns="http://www.w3.org/2000/svg">
                          <path stroke="currentColor" d="M368 154.668H16c-8.832 0-16-7.168-16-16s7.168-16 16-16h352c8.832 0 16 7.168 16 16s-7.168 16-16 16zm0 0M368 32H16C7.168 32 0 24.832 0 16S7.168 0 16 0h352c8.832 0 16 7.168 16 16s-7.168 16-16 16zm0 0M368 277.332H16c-8.832 0-16-7.168-16-16s7.168-16 16-16h352c8.832 0 16 7.168 16 16s-7.168 16-16 16zm0 0"/>
                        </svg>
                      </button>
                    </span>
                    <button className={"ml-5 flex items-center pl-2 pr-4 lg:py-1 py-3 text-sm font-medium text-white bg-gray-800 rounded hover:bg-gray-700"}>
                      <svg className={"h-5 w-5"} viewBox="0 0 24 24" fill="none">
                        <path 
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          d="M12 7v10m5-5H7"
                        />
                      </svg>
                      <span className={"ml-1"}>New Issue</span>
                    </button>
                  </div>
                </div>
              </div>
              <div className={"flex px-4 p-1 border-b bg-gray-200 rounded sm:hidden"}>
                <button className={"inline-flex items-center justify-center w-1/2 px-2 py-1 rounded"}>
                  <svg className={" h-6 w-6 text-gray-600 "} height="512" viewBox="0 -53 384 384" width="512" xmlns="http://www.w3.org/2000/svg">
                    <path stroke="currentColor" d="M368 154.668H16c-8.832 0-16-7.168-16-16s7.168-16 16-16h352c8.832 0 16 7.168 16 16s-7.168 16-16 16zm0 0M368 32H16C7.168 32 0 24.832 0 16S7.168 0 16 0h352c8.832 0 16 7.168 16 16s-7.168 16-16 16zm0 0M368 277.332H16c-8.832 0-16-7.168-16-16s7.168-16 16-16h352c8.832 0 16 7.168 16 16s-7.168 16-16 16zm0 0"/>
                  </svg>
                  <span className={"ml-2 text-md font-medium text-gray-600 leading-none"}>List</span>
                </button>
                <button className={"inline-flex items-center justify-center w-1/2 px-2 py-1 bg-white shadow rounded"}>
                  <svg className={" h-6 w-6 text-gray-600 "} height="512" viewBox="0 -53 384 384" width="512" xmlns="http://www.w3.org/2000/svg">
                    <path stroke="currentColor" d="M368 154.668H16c-8.832 0-16-7.168-16-16s7.168-16 16-16h352c8.832 0 16 7.168 16 16s-7.168 16-16 16zm0 0M368 32H16C7.168 32 0 24.832 0 16S7.168 0 16 0h352c8.832 0 16 7.168 16 16s-7.168 16-16 16zm0 0M368 277.332H16c-8.832 0-16-7.168-16-16s7.168-16 16-16h352c8.832 0 16 7.168 16 16s-7.168 16-16 16zm0 0"/>
                  </svg>
                  <span className={"ml-2 text-md font-medium text-gray-900 leading-none"}>Board</span>
                </button>
              </div>
            </header>
          </div>
          
          <div className={"flex-1 overflow-auto"}>
            <main className={"p-3 h-full overflow-hidden inline-flex"}>

              <div className={"flex-shrink-0 flex flex-col p-3 w-80 bg-gray-100 rounded ml-3"}>
                <h3 className={"text-sm pt-3 pb-1 px-3 flex-shrink-0 font-medium text-gray-900"}>Inbox</h3>
                <div className={"flex-1 min-h-0 overflow-auto"}>
                <ul className={"pt-1 pb-3 px-3"}>
                  <li className={""}>
                    <a href="#" className={"block p-5 bg-white rounded shadow"}>
                      <div className={"flex justify-between"}>
                        <p className={"text-sm font-medium leading-snug text-gray-900 text-left"}>
                          Add discount code to checkout page
                        </p>
                        <span>
                          <img
                            className={"h-6 w-6 rounded-full"}
                            src="https://i.pravatar.cc/100" alt="avatar"
                          />
                        </span> 
                      </div>
                      <div className={"flex justify-between items-baseline"}>
                        <div className={"text-sm text-gray-600"}>
                          <time dateTime="2019-09-14">Sep 14</time>
                        </div>
                        <div className={"mt-2"}>
                          <span className={"px-2 py-1 leading-tight inline-flex items-center bg-teal-100 rounded"}>
                            <svg className={"h-2 w-2 text-teal-500"} viewBox="0 0 8 8" fill="currentColor">
                              <circle cx="4" cy="4" r="3"/>
                            </svg>
                            <span className={"text-sm ml-2 font-medium text-teal-900"}>Feature Request</span>
                          </span>
                        </div>
                      </div>
                    </a>
                  </li>

                  <li className={"mt-3"}>
                    <a href="#" className={"block p-5 bg-white rounded shadow"}>
                      <div className={"flex justify-between"}>
                        <p className={"text-sm font-medium leading-snug text-gray-900 text-left"}>
                          Add discount code to checkout page
                        </p>
                        <span>
                          <img
                            className={"h-6 w-6 rounded-full"}
                            src="https://i.pravatar.cc/100" alt="avatar"
                          />
                        </span> 
                      </div>
                      <div className={"flex justify-between items-baseline"}>
                        <div className={"text-sm text-gray-600"}>
                          <time dateTime="2019-09-14">Sep 14</time>
                        </div>
                        <div className={"mt-2"}>
                          <span className={"px-2 py-1 leading-tight inline-flex items-center bg-teal-100 rounded"}>
                            <svg className={"h-2 w-2 text-teal-500"} viewBox="0 0 8 8" fill="currentColor">
                              <circle cx="4" cy="4" r="3"/>
                            </svg>
                            <span className={"text-sm ml-2 font-medium text-teal-900"}>Feature Request</span>
                          </span>
                        </div>
                      </div>
                    </a>
                  </li>

                  <li className={"mt-3"}>
                    <a href="#" className={"block p-5 bg-white rounded shadow"}>
                      <div className={"flex justify-between"}>
                        <p className={"text-sm font-medium leading-snug text-gray-900 text-left"}>
                          Add discount code to checkout page
                        </p>
                        <span>
                          <img
                            className={"h-6 w-6 rounded-full"}
                            src="https://i.pravatar.cc/100" alt="avatar"
                          />
                        </span> 
                      </div>
                      <div className={"flex justify-between items-baseline"}>
                        <div className={"text-sm text-gray-600"}>
                          <time dateTime="2019-09-14">Sep 14</time>
                        </div>
                        <div className={"mt-2"}>
                          <span className={"px-2 py-1 leading-tight inline-flex items-center bg-teal-100 rounded"}>
                            <svg className={"h-2 w-2 text-teal-500"} viewBox="0 0 8 8" fill="currentColor">
                              <circle cx="4" cy="4" r="3"/>
                            </svg>
                            <span className={"text-sm ml-2 font-medium text-teal-900"}>Feature Request</span>
                          </span>
                        </div>
                      </div>
                    </a>
                  </li>

                  <li className={"mt-3"}>
                    <a href="#" className={"block p-5 bg-white rounded shadow"}>
                      <div className={"flex justify-between"}>
                        <p className={"text-sm font-medium leading-snug text-gray-900 text-left"}>
                          Add discount code to checkout page
                        </p>
                        <span>
                          <img
                            className={"h-6 w-6 rounded-full"}
                            src="https://i.pravatar.cc/100" alt="avatar"
                          />
                        </span> 
                      </div>
                      <div className={"flex justify-between items-baseline"}>
                        <div className={"text-sm text-gray-600"}>
                          <time dateTime="2019-09-14">Sep 14</time>
                        </div>
                        <div className={"mt-2"}>
                          <span className={"px-2 py-1 leading-tight inline-flex items-center bg-teal-100 rounded"}>
                            <svg className={"h-2 w-2 text-teal-500"} viewBox="0 0 8 8" fill="currentColor">
                              <circle cx="4" cy="4" r="3"/>
                            </svg>
                            <span className={"text-sm ml-2 font-medium text-teal-900"}>Feature Request</span>
                          </span>
                        </div>
                      </div>
                    </a>
                  </li>

                </ul> 
                </div> 
              </div>


              <div className={"flex-shrink-0 flex flex-col p-3 w-80 bg-gray-100 rounded ml-3"}>
                <h3 className={"text-sm pt-3 pb-1 px-3 flex-shrink-0 font-medium text-gray-900"}>Backlogs</h3>
                <div className={"flex-1 min-h-0 overflow-auto"}>
                  <ul className={"pt-1 pb-3 px-3"}>
                    <li className={""}>
                      <a href="#" className={"block p-5 bg-white rounded shadow"}>
                        <div className={"flex justify-between"}>
                          <p className={"text-sm font-medium leading-snug text-gray-900 text-left"}>
                            Add discount code to checkout page
                          </p>
                          <span>
                            <img
                              className={"h-6 w-6 rounded-full"}
                              src="https://i.pravatar.cc/100" alt="avatar"
                            />
                          </span> 
                        </div>
                        <div className={"flex justify-between items-baseline"}>
                          <div className={"text-sm text-gray-600"}>
                            <time dateTime="2019-09-14">Sep 14</time>
                          </div>
                          <div className={"mt-2"}>
                            <span className={"px-2 py-1 leading-tight inline-flex items-center bg-teal-100 rounded"}>
                              <svg className={"h-2 w-2 text-teal-500"} viewBox="0 0 8 8" fill="currentColor">
                                <circle cx="4" cy="4" r="3"/>
                              </svg>
                              <span className={"text-sm ml-2 font-medium text-teal-900"}>Feature Request</span>
                            </span>
                          </div>
                        </div>
                      </a>
                    </li>

                    <li className={"mt-3"}>
                      <a href="#" className={"block p-5 bg-white rounded shadow"}>
                        <div className={"flex justify-between"}>
                          <p className={"text-sm font-medium leading-snug text-gray-900 text-left"}>
                            Add discount code to checkout page
                          </p>
                          <span>
                            <img
                              className={"h-6 w-6 rounded-full"}
                              src="https://i.pravatar.cc/100" alt="avatar"
                            />
                          </span> 
                        </div>
                        <div className={"flex justify-between items-baseline"}>
                          <div className={"text-sm text-gray-600"}>
                            <time dateTime="2019-09-14">Sep 14</time>
                          </div>
                          <div className={"mt-2"}>
                            <span className={"px-2 py-1 leading-tight inline-flex items-center bg-teal-100 rounded"}>
                              <svg className={"h-2 w-2 text-teal-500"} viewBox="0 0 8 8" fill="currentColor">
                                <circle cx="4" cy="4" r="3"/>
                              </svg>
                              <span className={"text-sm ml-2 font-medium text-teal-900"}>Feature Request</span>
                            </span>
                          </div>
                        </div>
                      </a>
                    </li>

                    <li className={"mt-3"}>
                      <a href="#" className={"block p-5 bg-white rounded shadow"}>
                        <div className={"flex justify-between"}>
                          <p className={"text-sm font-medium leading-snug text-gray-900 text-left"}>
                            Add discount code to checkout page
                          </p>
                          <span>
                            <img
                              className={"h-6 w-6 rounded-full"}
                              src="https://i.pravatar.cc/100" alt="avatar"
                            />
                          </span> 
                        </div>
                        <div className={"flex justify-between items-baseline"}>
                          <div className={"text-sm text-gray-600"}>
                            <time dateTime="2019-09-14">Sep 14</time>
                          </div>
                          <div className={"mt-2"}>
                            <span className={"px-2 py-1 leading-tight inline-flex items-center bg-teal-100 rounded"}>
                              <svg className={"h-2 w-2 text-teal-500"} viewBox="0 0 8 8" fill="currentColor">
                                <circle cx="4" cy="4" r="3"/>
                              </svg>
                              <span className={"text-sm ml-2 font-medium text-teal-900"}>Feature Request</span>
                            </span>
                          </div>
                        </div>
                      </a>
                    </li>

                    <li className={"mt-3"}>
                      <a href="#" className={"block p-5 bg-white rounded shadow"}>
                        <div className={"flex justify-between"}>
                          <p className={"text-sm font-medium leading-snug text-gray-900 text-left"}>
                            Add discount code to checkout page
                          </p>
                          <span>
                            <img
                              className={"h-6 w-6 rounded-full"}
                              src="https://i.pravatar.cc/100" alt="avatar"
                            />
                          </span> 
                        </div>
                        <div className={"flex justify-between items-baseline"}>
                          <div className={"text-sm text-gray-600"}>
                            <time dateTime="2019-09-14">Sep 14</time>
                          </div>
                          <div className={"mt-2"}>
                            <span className={"px-2 py-1 leading-tight inline-flex items-center bg-teal-100 rounded"}>
                              <svg className={"h-2 w-2 text-teal-500"} viewBox="0 0 8 8" fill="currentColor">
                                <circle cx="4" cy="4" r="3"/>
                              </svg>
                              <span className={"text-sm ml-2 font-medium text-teal-900"}>Feature Request</span>
                            </span>
                          </div>
                        </div>
                      </a>
                    </li>

                    <li className={"mt-3"}>
                      <a href="#" className={"block p-5 bg-white rounded shadow"}>
                        <div className={"flex justify-between"}>
                          <p className={"text-sm font-medium leading-snug text-gray-900 text-left"}>
                            Add discount code to checkout page
                          </p>
                          <span>
                            <img
                              className={"h-6 w-6 rounded-full"}
                              src="https://i.pravatar.cc/100" alt="avatar"
                            />
                          </span> 
                        </div>
                        <div className={"flex justify-between items-baseline"}>
                          <div className={"text-sm text-gray-600"}>
                            <time dateTime="2019-09-14">Sep 14</time>
                          </div>
                          <div className={"mt-2"}>
                            <span className={"px-2 py-1 leading-tight inline-flex items-center bg-teal-100 rounded"}>
                              <svg className={"h-2 w-2 text-teal-500"} viewBox="0 0 8 8" fill="currentColor">
                                <circle cx="4" cy="4" r="3"/>
                              </svg>
                              <span className={"text-sm ml-2 font-medium text-teal-900"}>Feature Request</span>
                            </span>
                          </div>
                        </div>
                      </a>
                    </li>

                    <li className={"mt-3"}>
                      <a href="#" className={"block p-5 bg-white rounded shadow"}>
                        <div className={"flex justify-between"}>
                          <p className={"text-sm font-medium leading-snug text-gray-900 text-left"}>
                            Add discount code to checkout page
                          </p>
                          <span>
                            <img
                              className={"h-6 w-6 rounded-full"}
                              src="https://i.pravatar.cc/100" alt="avatar"
                            />
                          </span> 
                        </div>
                        <div className={"flex justify-between items-baseline"}>
                          <div className={"text-sm text-gray-600"}>
                            <time dateTime="2019-09-14">Sep 14</time>
                          </div>
                          <div className={"mt-2"}>
                            <span className={"px-2 py-1 leading-tight inline-flex items-center bg-teal-100 rounded"}>
                              <svg className={"h-2 w-2 text-teal-500"} viewBox="0 0 8 8" fill="currentColor">
                                <circle cx="4" cy="4" r="3"/>
                              </svg>
                              <span className={"text-sm ml-2 font-medium text-teal-900"}>Feature Request</span>
                            </span>
                          </div>
                        </div>
                      </a>
                    </li>

                    <li className={"mt-3"}>
                      <a href="#" className={"block p-5 bg-white rounded shadow"}>
                        <div className={"flex justify-between"}>
                          <p className={"text-sm font-medium leading-snug text-gray-900 text-left"}>
                            Add discount code to checkout page
                          </p>
                          <span>
                            <img
                              className={"h-6 w-6 rounded-full"}
                              src="https://i.pravatar.cc/100" alt="avatar"
                            />
                          </span> 
                        </div>
                        <div className={"flex justify-between items-baseline"}>
                          <div className={"text-sm text-gray-600"}>
                            <time dateTime="2019-09-14">Sep 14</time>
                          </div>
                          <div className={"mt-2"}>
                            <span className={"px-2 py-1 leading-tight inline-flex items-center bg-teal-100 rounded"}>
                              <svg className={"h-2 w-2 text-teal-500"} viewBox="0 0 8 8" fill="currentColor">
                                <circle cx="4" cy="4" r="3"/>
                              </svg>
                              <span className={"text-sm ml-2 font-medium text-teal-900"}>Feature Request</span>
                            </span>
                          </div>
                        </div>
                      </a>
                    </li>

                    <li className={"mt-3"}>
                      <a href="#" className={"block p-5 bg-white rounded shadow"}>
                        <div className={"flex justify-between"}>
                          <p className={"text-sm font-medium leading-snug text-gray-900 text-left"}>
                            Add discount code to checkout page
                          </p>
                          <span>
                            <img
                              className={"h-6 w-6 rounded-full"}
                              src="https://i.pravatar.cc/100" alt="avatar"
                            />
                          </span> 
                        </div>
                        <div className={"flex justify-between items-baseline"}>
                          <div className={"text-sm text-gray-600"}>
                            <time dateTime="2019-09-14">Sep 14</time>
                          </div>
                          <div className={"mt-2"}>
                            <span className={"px-2 py-1 leading-tight inline-flex items-center bg-teal-100 rounded"}>
                              <svg className={"h-2 w-2 text-teal-500"} viewBox="0 0 8 8" fill="currentColor">
                                <circle cx="4" cy="4" r="3"/>
                              </svg>
                              <span className={"text-sm ml-2 font-medium text-teal-900"}>Feature Request</span>
                            </span>
                          </div>
                        </div>
                      </a>
                    </li>
                  </ul>  
                </div>
              </div>
            
            
              <div className={"flex-shrink-0 flex flex-col p-3 w-80 bg-gray-100 rounded ml-3"}>
                <h3 className={"text-sm pt-3 pb-1 px-3 flex-shrink-0 font-medium text-gray-900"}>In progress</h3>
                <div className={"flex-1 min-h-0 overflow-auto"}>
                  <ul className={"pt-1 pb-3 px-3"}>
                    <li className={""}>
                      <a href="#" className={"block p-5 bg-white rounded shadow"}>
                        <div className={"flex justify-between"}>
                          <p className={"text-sm font-medium leading-snug text-gray-900 text-left"}>
                            Add discount code to checkout page
                          </p>
                          <span>
                            <img
                              className={"h-6 w-6 rounded-full"}
                              src="https://i.pravatar.cc/100" alt="avatar"
                            />
                          </span> 
                        </div>
                        <div className={"flex justify-between items-baseline"}>
                          <div className={"text-sm text-gray-600"}>
                            <time dateTime="2019-09-14">Sep 14</time>
                          </div>
                          <div className={"mt-2"}>
                            <span className={"px-2 py-1 leading-tight inline-flex items-center bg-teal-100 rounded"}>
                              <svg className={"h-2 w-2 text-teal-500"} viewBox="0 0 8 8" fill="currentColor">
                                <circle cx="4" cy="4" r="3"/>
                              </svg>
                              <span className={"text-sm ml-2 font-medium text-teal-900"}>Feature Request</span>
                            </span>
                          </div>
                        </div>
                      </a>
                    </li>

                    <li className={"mt-3"}>
                      <a href="#" className={"block p-5 bg-white rounded shadow"}>
                        <div className={"flex justify-between"}>
                          <p className={"text-sm font-medium leading-snug text-gray-900 text-left"}>
                            Add discount code to checkout page
                          </p>
                          <span>
                            <img
                              className={"h-6 w-6 rounded-full"}
                              src="https://i.pravatar.cc/100" alt="avatar"
                            />
                          </span> 
                        </div>
                        <div className={"flex justify-between items-baseline"}>
                          <div className={"text-sm text-gray-600"}>
                            <time dateTime="2019-09-14">Sep 14</time>
                          </div>
                          <div className={"mt-2"}>
                            <span className={"px-2 py-1 leading-tight inline-flex items-center bg-teal-100 rounded"}>
                              <svg className={"h-2 w-2 text-teal-500"} viewBox="0 0 8 8" fill="currentColor">
                                <circle cx="4" cy="4" r="3"/>
                              </svg>
                              <span className={"text-sm ml-2 font-medium text-teal-900"}>Feature Request</span>
                            </span>
                          </div>
                        </div>
                      </a>
                    </li>

                    <li className={"mt-3"}>
                      <a href="#" className={"block p-5 bg-white rounded shadow"}>
                        <div className={"flex justify-between"}>
                          <p className={"text-sm font-medium leading-snug text-gray-900 text-left"}>
                            Add discount code to checkout page
                          </p>
                          <span>
                            <img
                              className={"h-6 w-6 rounded-full"}
                              src="https://i.pravatar.cc/100" alt="avatar"
                            />
                          </span> 
                        </div>
                        <div className={"flex justify-between items-baseline"}>
                          <div className={"text-sm text-gray-600"}>
                            <time dateTime="2019-09-14">Sep 14</time>
                          </div>
                          <div className={"mt-2"}>
                            <span className={"px-2 py-1 leading-tight inline-flex items-center bg-teal-100 rounded"}>
                              <svg className={"h-2 w-2 text-teal-500"} viewBox="0 0 8 8" fill="currentColor">
                                <circle cx="4" cy="4" r="3"/>
                              </svg>
                              <span className={"text-sm ml-2 font-medium text-teal-900"}>Feature Request</span>
                            </span>
                          </div>
                        </div>
                      </a>
                    </li>

                    <li className={"mt-3"}>
                      <a href="#" className={"block p-5 bg-white rounded shadow"}>
                        <div className={"flex justify-between"}>
                          <p className={"text-sm font-medium leading-snug text-gray-900 text-left"}>
                            Add discount code to checkout page
                          </p>
                          <span>
                            <img
                              className={"h-6 w-6 rounded-full"}
                              src="https://i.pravatar.cc/100" alt="avatar"
                            />
                          </span> 
                        </div>
                        <div className={"flex justify-between items-baseline"}>
                          <div className={"text-sm text-gray-600"}>
                            <time dateTime="2019-09-14">Sep 14</time>
                          </div>
                          <div className={"mt-2"}>
                            <span className={"px-2 py-1 leading-tight inline-flex items-center bg-teal-100 rounded"}>
                              <svg className={"h-2 w-2 text-teal-500"} viewBox="0 0 8 8" fill="currentColor">
                                <circle cx="4" cy="4" r="3"/>
                              </svg>
                              <span className={"text-sm ml-2 font-medium text-teal-900"}>Feature Request</span>
                            </span>
                          </div>
                        </div>
                      </a>
                    </li>

                  </ul>
                </div>  
              </div>
            

              <div className={"flex-shrink-0 flex flex-col p-3 w-80 bg-gray-100 rounded ml-3"}>
                <h3 className={"text-sm pt-3 pb-1 px-3 flex-shrink-0 font-medium text-gray-900"}>Ready to review</h3>
                <div className={"flex-1 min-h-0 overflow-auto"}>
                  <ul className={"pt-1 pb-3 px-3"}>
                    <li className={""}>
                      <a href="#" className={"block p-5 bg-white rounded shadow"}>
                        <div className={"flex justify-between"}>
                          <p className={"text-sm font-medium leading-snug text-gray-900 text-left"}>
                            Add discount code to checkout page
                          </p>
                          <span>
                            <img
                              className={"h-6 w-6 rounded-full"}
                              src="https://i.pravatar.cc/100" alt="avatar"
                            />
                          </span> 
                        </div>
                        <div className={"flex justify-between items-baseline"}>
                          <div className={"text-sm text-gray-600"}>
                            <time dateTime="2019-09-14">Sep 14</time>
                          </div>
                          <div className={"mt-2"}>
                            <span className={"px-2 py-1 leading-tight inline-flex items-center bg-teal-100 rounded"}>
                              <svg className={"h-2 w-2 text-teal-500"} viewBox="0 0 8 8" fill="currentColor">
                                <circle cx="4" cy="4" r="3"/>
                              </svg>
                              <span className={"text-sm ml-2 font-medium text-teal-900"}>Feature Request</span>
                            </span>
                          </div>
                        </div>
                      </a>
                    </li>

                    <li className={"mt-3"}>
                      <a href="#" className={"block p-5 bg-white rounded shadow"}>
                        <div className={"flex justify-between"}>
                          <p className={"text-sm font-medium leading-snug text-gray-900 text-left"}>
                            Add discount code to checkout page
                          </p>
                          <span>
                            <img
                              className={"h-6 w-6 rounded-full"}
                              src="https://i.pravatar.cc/100" alt="avatar"
                            />
                          </span> 
                        </div>
                        <div className={"flex justify-between items-baseline"}>
                          <div className={"text-sm text-gray-600"}>
                            <time dateTime="2019-09-14">Sep 14</time>
                          </div>
                          <div className={"mt-2"}>
                            <span className={"px-2 py-1 leading-tight inline-flex items-center bg-teal-100 rounded"}>
                              <svg className={"h-2 w-2 text-teal-500"} viewBox="0 0 8 8" fill="currentColor">
                                <circle cx="4" cy="4" r="3"/>
                              </svg>
                              <span className={"text-sm ml-2 font-medium text-teal-900"}>Feature Request</span>
                            </span>
                          </div>
                        </div>
                      </a>
                    </li>

                    <li className={"mt-3"}>
                      <a href="#" className={"block p-5 bg-white rounded shadow"}>
                        <div className={"flex justify-between"}>
                          <p className={"text-sm font-medium leading-snug text-gray-900 text-left"}>
                            Add discount code to checkout page
                          </p>
                          <span>
                            <img
                              className={"h-6 w-6 rounded-full"}
                              src="https://i.pravatar.cc/100" alt="avatar"
                            />
                          </span> 
                        </div>
                        <div className={"flex justify-between items-baseline"}>
                          <div className={"text-sm text-gray-600"}>
                            <time dateTime="2019-09-14">Sep 14</time>
                          </div>
                          <div className={"mt-2"}>
                            <span className={"px-2 py-1 leading-tight inline-flex items-center bg-teal-100 rounded"}>
                              <svg className={"h-2 w-2 text-teal-500"} viewBox="0 0 8 8" fill="currentColor">
                                <circle cx="4" cy="4" r="3"/>
                              </svg>
                              <span className={"text-sm ml-2 font-medium text-teal-900"}>Feature Request</span>
                            </span>
                          </div>
                        </div>
                      </a>
                    </li>

                    <li className={"mt-3"}>
                      <a href="#" className={"block p-5 bg-white rounded shadow"}>
                        <div className={"flex justify-between"}>
                          <p className={"text-sm font-medium leading-snug text-gray-900 text-left"}>
                            Add discount code to checkout page
                          </p>
                          <span>
                            <img
                              className={"h-6 w-6 rounded-full"}
                              src="https://i.pravatar.cc/100" alt="avatar"
                            />
                          </span> 
                        </div>
                        <div className={"flex justify-between items-baseline"}>
                          <div className={"text-sm text-gray-600"}>
                            <time dateTime="2019-09-14">Sep 14</time>
                          </div>
                          <div className={"mt-2"}>
                            <span className={"px-2 py-1 leading-tight inline-flex items-center bg-teal-100 rounded"}>
                              <svg className={"h-2 w-2 text-teal-500"} viewBox="0 0 8 8" fill="currentColor">
                                <circle cx="4" cy="4" r="3"/>
                              </svg>
                              <span className={"text-sm ml-2 font-medium text-teal-900"}>Feature Request</span>
                            </span>
                          </div>
                        </div>
                      </a>
                    </li>

                  </ul>  
                </div>
              </div>
            

              <div className={"flex-shrink-0 flex flex-col p-3 w-80 bg-gray-100 rounded ml-3"}>
                <h3 className={"text-sm pt-3 pb-1 px-3 flex-shrink-0 font-medium text-gray-900"}>Done</h3>
                <div className={"flex-1 min-h-0 overflow-auto"}>
                  <ul className={"pt-1 pb-3 px-3"}>
                    <li className={""}>
                      <a href="#" className={"block p-5 bg-white rounded shadow"}>
                        <div className={"flex justify-between"}>
                          <p className={"text-sm font-medium leading-snug text-gray-900 text-left"}>
                            Add discount code to checkout page
                          </p>
                          <span>
                            <img
                              className={"h-6 w-6 rounded-full"}
                              src="https://i.pravatar.cc/100" alt="avatar"
                            />
                          </span> 
                        </div>
                        <div className={"flex justify-between items-baseline"}>
                          <div className={"text-sm text-gray-600"}>
                            <time dateTime="2019-09-14">Sep 14</time>
                          </div>
                          <div className={"mt-2"}>
                            <span className={"px-2 py-1 leading-tight inline-flex items-center bg-teal-100 rounded"}>
                              <svg className={"h-2 w-2 text-teal-500"} viewBox="0 0 8 8" fill="currentColor">
                                <circle cx="4" cy="4" r="3"/>
                              </svg>
                              <span className={"text-sm ml-2 font-medium text-teal-900"}>Feature Request</span>
                            </span>
                          </div>
                        </div>
                      </a>
                    </li>

                    <li className={"mt-3"}>
                      <a href="#" className={"block p-5 bg-white rounded shadow"}>
                        <div className={"flex justify-between"}>
                          <p className={"text-sm font-medium leading-snug text-gray-900 text-left"}>
                            Add discount code to checkout page
                          </p>
                          <span>
                            <img
                              className={"h-6 w-6 rounded-full"}
                              src="https://i.pravatar.cc/100" alt="avatar"
                            />
                          </span> 
                        </div>
                        <div className={"flex justify-between items-baseline"}>
                          <div className={"text-sm text-gray-600"}>
                            <time dateTime="2019-09-14">Sep 14</time>
                          </div>
                          <div className={"mt-2"}>
                            <span className={"px-2 py-1 leading-tight inline-flex items-center bg-teal-100 rounded"}>
                              <svg className={"h-2 w-2 text-teal-500"} viewBox="0 0 8 8" fill="currentColor">
                                <circle cx="4" cy="4" r="3"/>
                              </svg>
                              <span className={"text-sm ml-2 font-medium text-teal-900"}>Feature Request</span>
                            </span>
                          </div>
                        </div>
                      </a>
                    </li>

                    <li className={"mt-3"}>
                      <a href="#" className={"block p-5 bg-white rounded shadow"}>
                        <div className={"flex justify-between"}>
                          <p className={"text-sm font-medium leading-snug text-gray-900 text-left"}>
                            Add discount code to checkout page
                          </p>
                          <span>
                            <img
                              className={"h-6 w-6 rounded-full"}
                              src="https://i.pravatar.cc/100" alt="avatar"
                            />
                          </span> 
                        </div>
                        <div className={"flex justify-between items-baseline"}>
                          <div className={"text-sm text-gray-600"}>
                            <time dateTime="2019-09-14">Sep 14</time>
                          </div>
                          <div className={"mt-2"}>
                            <span className={"px-2 py-1 leading-tight inline-flex items-center bg-teal-100 rounded"}>
                              <svg className={"h-2 w-2 text-teal-500"} viewBox="0 0 8 8" fill="currentColor">
                                <circle cx="4" cy="4" r="3"/>
                              </svg>
                              <span className={"text-sm ml-2 font-medium text-teal-900"}>Feature Request</span>
                            </span>
                          </div>
                        </div>
                      </a>
                    </li>

                    <li className={"mt-3"}>
                      <a href="#" className={"block p-5 bg-white rounded shadow"}>
                        <div className={"flex justify-between"}>
                          <p className={"text-sm font-medium leading-snug text-gray-900 text-left"}>
                            Add discount code to checkout page
                          </p>
                          <span>
                            <img
                              className={"h-6 w-6 rounded-full"}
                              src="https://i.pravatar.cc/100" alt="avatar"
                            />
                          </span> 
                        </div>
                        <div className={"flex justify-between items-baseline"}>
                          <div className={"text-sm text-gray-600"}>
                            <time dateTime="2019-09-14">Sep 14</time>
                          </div>
                          <div className={"mt-2"}>
                            <span className={"px-2 py-1 leading-tight inline-flex items-center bg-teal-100 rounded"}>
                              <svg className={"h-2 w-2 text-teal-500"} viewBox="0 0 8 8" fill="currentColor">
                                <circle cx="4" cy="4" r="3"/>
                              </svg>
                              <span className={"text-sm ml-2 font-medium text-teal-900"}>Feature Request</span>
                            </span>
                          </div>
                        </div>
                      </a>
                    </li>

                  </ul>
                </div>  
              </div>
            
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
