import React from "react";

export const PokemonInfo = () => {
  //   return (
  //     <div className="container border border-primary">
  //       <div className="card mb-3" style={{ maxWidth: "540px" }}>
  //         <div className="row g-0">
  //           <div className="col-md-4">
  //             <img
  //               src="https://picsum.photos/id/237/200/300"
  //               className="img-fluid rounded-start"
  //               alt="..."
  //             />
  //           </div>
  //           <div className="col-md-8">
  //             <div className="card-body">
  //               <h5 className="card-title">POKEMON</h5>
  //               <ul>
  //                 <li>
  //                   <div className="d-flex">
  //                     <div className="w-50">Vida</div>
  //                     <div className="progress my-1 w-50">
  //                       <div
  //                         className="progress-bar bg-info"
  //                         role="progressbar"
  //                         style={{ width: "50%" }}
  //                         aria-valuenow="60"
  //                         aria-valuemin="0"
  //                         aria-valuemax="100"
  //                       ></div>
  //                     </div>
  //                   </div>
  //                   <div className="d-flex">
  //                     <div className="w-50">Vida</div>
  //                     <div className="progress my-1 w-50">
  //                       <div
  //                         className="progress-bar bg-info"
  //                         role="progressbar"
  //                         style={{ width: "50%" }}
  //                         aria-valuenow="60"
  //                         aria-valuemin="0"
  //                         aria-valuemax="100"
  //                       ></div>
  //                     </div>
  //                   </div>
  //                   <div className="d-flex">
  //                     <div className="w-50">Vida</div>
  //                     <div className="progress my-1 w-50">
  //                       <div
  //                         className="progress-bar bg-info"
  //                         role="progressbar"
  //                         style={{ width: "50%" }}
  //                         aria-valuenow="60"
  //                         aria-valuemin="0"
  //                         aria-valuemax="100"
  //                       ></div>
  //                     </div>
  //                   </div>
  //                 </li>
  //               </ul>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //       <div className="text-center">
  //         <h2>Info general</h2>
  //         <p className="card-text">
  //           Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga ipsum
  //           perferendis, vel eaque rem laborum non, deleniti iusto mollitia
  //           molestiae blanditiis? Perspiciatis repellendus veniam, ipsum corrupti
  //           iusto quaerat accusamus commodi?
  //         </p>
  //       </div>
  //     </div>
  //   );

  return (
    <div className="container border border-primary">
      <div className="d-flex justify-content-center">
        <div className="card">
          <div className="row">
            <div className="col-md-5 p-0">
              <img
                src="https://picsum.photos/id/237/500/500"
                className="img-fluid float-start"
                style={{ width: "300px", height: "400px" }}
                alt="..."
              />
              <div className="d-flex justify-content-end">
                <button type="button" class="btn btn-primary btn-sm">
                  <i class="fas fa-random"></i>
                </button>
                <button type="button" class="btn btn-primary btn-sm">
                  <i class="fas fa-map-marked-alt"></i>
                </button>
              </div>
            </div>

            <div className="col-md-7">
              <div className="card-body p-1">
                <h5 className="card-title text-center">NOMBRE POKEMON</h5>
                <div className="table">
                  <table className="table">
                    <tbody>
                      <tr>
                        <th className="text-end">HP:</th>
                        <td className="text-center">39</td>
                        <td className="align-middle" style={{ width: "10rem" }}>
                          <div className="progress">
                            <div
                              className="progress-bar bg-success"
                              role="progressbar"
                              style={{ width: "39%" }}
                              aria-valuenow="25"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th className="text-end">Attack:</th>
                        <td className="text-center">52</td>
                        <td className="align-middle" style={{ width: "10rem" }}>
                          <div className="progress">
                            <div
                              className="progress-bar bg-success"
                              role="progressbar"
                              style={{ width: "52%" }}
                              aria-valuenow="25"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th className="text-end">Defense:</th>
                        <td className="text-center">43</td>
                        <td className="align-middle" style={{ width: "10rem" }}>
                          <div className="progress">
                            <div
                              className="progress-bar bg-success"
                              role="progressbar"
                              style={{ width: "43%" }}
                              aria-valuenow="25"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th className="text-end">Sp. Atk:</th>
                        <td className="text-center">60</td>
                        <td className="align-middle" style={{ width: "10rem" }}>
                          <div className="progress">
                            <div
                              className="progress-bar bg-success"
                              role="progressbar"
                              style={{ width: "60%" }}
                              aria-valuenow="25"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th className="text-end">Sp. Def:</th>
                        <td className="text-center">50</td>
                        <td className="align-middle" style={{ width: "10rem" }}>
                          <div className="progress">
                            <div
                              className="progress-bar bg-success"
                              role="progressbar"
                              style={{ width: "50%" }}
                              aria-valuenow="25"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th className="text-end">Speed:</th>
                        <td className="text-center">65</td>
                        <td className="align-middle" style={{ width: "10rem" }}>
                          <div className="progress">
                            <div
                              className="progress-bar bg-success"
                              role="progressbar"
                              style={{ width: "65%" }}
                              aria-valuenow="25"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <h5 className="text-center">Type: 🔥⚡🌿</h5>
              <h5 className="text-center">Evolutions:</h5>
              <div className="d-flex justify-content-between p-2 m-2 border">
                <a href="http://" target="_blank" rel="noopener noreferrer">
                  IMG
                </a>
                <a href="http://" target="_blank" rel="noopener noreferrer">
                  IMG
                </a>
                <a href="http://" target="_blank" rel="noopener noreferrer">
                  IMG
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center border m-3">
        <h2>Info general</h2>
        <p className="card-text">
          Charmander might look like a good Pokemon to use due to its movepool
          and access to Dragon Dance, but its power output is disappointing even
          with using Life Orb to get the most out of its attacks. It is
          outclassed by other Fire-types like Ponyta, Larvesta, and Magby due to
          their better Attack, Speed, and bulk.
        </p>
      </div>
      <div className="moves">
        <h2 className="text-center">MOVES</h2>
        <table class="table table-bordered">
          <thead>
            <tr></tr>
          </thead>
          <tbody>
            <tr>
              <td>Move Name</td>
              <td>Move type</td>
              <td>Power</td>
              <td>Accuracy</td>
              <td>PP</td>
            </tr>
            <tr>
              <td>Move Name</td>
              <td>Move type</td>
              <td>Power</td>
              <td>Accuracy</td>
              <td>PP</td>
            </tr>
            <tr>
              <td>Move Name</td>
              <td>Move type</td>
              <td>Power</td>
              <td>Accuracy</td>
              <td>PP</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
