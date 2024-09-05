import { useState } from "react";
import { FiLoader } from "react-icons/fi";
import { FiCheckCircle } from "react-icons/fi";

function App() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <>
      <div className="justify-center text-center my-5">
        ============================ Solid Button ============================
      </div>
      <div className=" justify-center flex gap-3">
        {/* Default Button */}
        <div>
          <button className="default-btn" onClick={() => setIsLoading(false)}>
            Default
          </button>
        </div>

        <div>
          {/* Negative Button */}
          <button className="negative-btn">Negative</button>
        </div>

        <div>
          {/* Disabled Button */}
          <button className="disabled-btn">Diabled</button>
        </div>

        <div>
          {/* Loading Button */}
          <button
            className={`loading-btn`}
            onClick={() => setIsLoading(!isLoading)}
          >
            {isLoading ? (
              <>
                <FiLoader className="loading-spinner mr-2" />
              </>
            ) : (
              "Loading"
            )}
          </button>
        </div>
        <div>
          {/* Success Button */}
          <button
            className="success-btn"
            style={{ display: "flex", alignItems: "center" }}
          >
            <FiCheckCircle className=" m-3" />
            Success!
          </button>
        </div>

        {/* =============================================== */}

        <div>
          <button className="long-btn" onClick={() => setIsLoading(false)}>
            Default
          </button>
        </div>

        <div>
          {/* Negative Button */}
          <button className="long-negative-btn">Negative</button>
        </div>

        <div>
          {/* Disabled Button */}
          <button className="long-disabled-btn">Disabled</button>
        </div>

        <div>
          {/* Loading Button */}
          <button
            className={`long-loading-btn`}
            onClick={() => setIsLoading(!isLoading)}
          >
            {isLoading ? (
              <>
                <FiLoader className="loading-spinner mr-2" />
              </>
            ) : (
              "Loading"
            )}
          </button>
        </div>
        <div>
          {/* Success Button */}
          <button
            className="long-success-btn"
            style={{ display: "flex", alignItems: "center" }}
          >
            <FiCheckCircle className=" mx-10" />
            Success!
          </button>
        </div>
      </div>
      <div className="justify-center text-center my-5">
        ============================ Border ============================
      </div>
      <div className=" justify-center flex gap-3">
        {/* Default Button */}
        <div>
          <button
            className="border-default-btn"
            onClick={() => setIsLoading(false)}
          >
            Default
          </button>
        </div>

        <div>
          {/* Negative Button */}
          <button className="border-negative-btn">Negative</button>
        </div>

        <div>
          {/* Disabled Button */}
          <button className="border-disabled-btn">Diabled</button>
        </div>

        <div>
          {/* Loading Button */}
          <button
            className={`border-loading-btn`}
            onClick={() => setIsLoading(!isLoading)}
          >
            {isLoading ? (
              <>
                <FiLoader className="border-loading-spinner mr-2" />
              </>
            ) : (
              "Loading"
            )}
          </button>
        </div>
        <div>
          {/* Success Button */}
          <button
            className="border-success-btn"
            style={{ display: "flex", alignItems: "center" }}
          >
            <FiCheckCircle className=" m-3" />
            Success!
          </button>
        </div>

        {/* =============================================== */}

        <div>
          <button
            className="border-long-btn"
            onClick={() => setIsLoading(false)}
          >
            Default
          </button>
        </div>

        <div>
          {/* Negative Button */}
          <button className="border-long-negative-btn">Negative</button>
        </div>

        <div>
          {/* Disabled Button */}
          <button className="border-long-disabled-btn">Diabled</button>
        </div>

        <div>
          {/* Loading Button */}
          <button
            className={`border-long-loading-btn`}
            onClick={() => setIsLoading(!isLoading)}
          >
            {isLoading ? (
              <>
                <FiLoader className="border-loading-spinner mr-2" />
              </>
            ) : (
              "Loading"
            )}
          </button>
        </div>
        <div>
          {/* Success Button */}
          <button
            className="border-long-success-btn"
            style={{ display: "flex", alignItems: "center" }}
          >
            <FiCheckCircle className=" mx-10" />
            Success!
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
