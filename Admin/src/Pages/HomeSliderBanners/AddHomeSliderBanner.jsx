import React from "react";
import UploadImageBox from "../../Components/UploadBox/UploadImageBox";
import { MdClose, MdOutlineCloudUpload } from "react-icons/md";
import { Button } from "@mui/material";

function AddHomeSliderBanner() {
  return (
    <section className="p-4 sm:p-5 bg-gray-50">
      <form action="" className="min-h-[80vh] py-2 px-4 sm:px-10">
        <div className="uploadimg w-full p-2 px-1">
          <h3 className="font-[600] text-[18px]">Media & Images</h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 py-4">
            <UploadImageBox multiple={false} />

            <div className="uploadBox relative flex flex-col !items-center !justify-center !rounded-sm border-bashed border-1 border-[rgba(0,0,0,0.4)] bg-gray-100 hover:bg-gray-200 cursor-pointer w-full h-[170px]">
              <span className="absolute -top-[10px] -right-[5px] w-[20px] h-[20px] rounded-full flex items-center justify-center bg-red-700">
                <MdClose className="text-white text-[16px]" />
              </span>
              <img
                src="https://www.fnp.com/images/pr/l/v20221205201829/red-velvet-fresh-cream-cake-half-kg_1.jpg"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <br />
          <Button
            type="button"
            className="flex items-center justify-center gap-2 btn-blue btn-lg w-full sm:w-[40%] md:w-[25%] lg:w-[16%]"
          >
            <MdOutlineCloudUpload className="text-[22px]" />
            Upload Product
          </Button>
        </div>
      </form>
    </section>
  );
}

export default AddHomeSliderBanner;
