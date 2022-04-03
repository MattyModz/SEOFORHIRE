export default function Review() {
  return (
    <div className=" mr-8 pr-28 mb-4">
      <div className="bg-royal rounded-xl ">
        <a class="col-span-3 bg-rose-600 rounded-xl h-52 md:h-80" href="">
          <img
            src="https://a0.muscache.com/im/pictures/03bb6d0a-5ccb-47e1-83fc-b7ad87e7f8c3.jpg?im_w=320"
            class="rounded-t-xl max-h-44"
          />

          <p class="text-xl md:text-3xl text-gray-50 pt-5 pl-3"> 5Stars </p>

          <p class="text-xs md:text-lg font-light text-gray-50 pt-3 pl-3 pb-10">
            {" "}
            Review Here or <br />
            Links to podcast / content{" "}
          </p>
        </a>
      </div>
    </div>
  );
}
