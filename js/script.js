let naam = document.getElementById("chapter");
let pnt = document.getElementById("Printslok");

fetch("https://vedicscriptures.github.io/chapters")
  .then((res) => res.json())
  .then((data) => {
    console.log("Data Is", data[0]);
    let chp = data.filter((chapter) => chapter.name);

    chp.forEach((chapter) => {
      console.log("Chapter Name Is ", chapter.chapter_number);
      naam.innerHTML += `
        <div class="w-4/12 border border-black px-5 py-4 rounded-lg m-0">
          <img src="./Ass/Images/cdfbac94d2f87dc40d88400cfa285b6d.jpg" alt="" class="width-[300px]"/>
          <div class="text flex justify-center">
            <a href="#" onclick="return edit('${chapter.summary.hi}')">
              <h2 class="text-xl font-semibold" x-on:click="open = true">${chapter.name}</h2>
            </a>
          </div>
          <div class="btn w-full flex justify-center mt-5">
            <button class="px-9 py-3 border border-black rounded-full">
                <span class="font-semibold">Chapter ${chapter.chapter_number}</span>
            </button>
          </div>
        </div>`;
    });
  })
  .catch((err) => {
    console.log("Error", err);
  });

const edit = (summary) => {
  pnt.innerHTML = "";
  console.log("Summary: ", summary);
  pnt.innerHTML += `<!-- component -->
    <div class="flex justify-center items-center h-screen">
      <div x-data="{ open: true }">
       
        <!-- Modal Overlay -->
        <div
          x-show="open"
          class="fixed inset-0 px-2 z-10 overflow-hidden flex items-center justify-center"
        >
          <div
            x-show="open"
            x-transition:enter="transition-opacity ease-out duration-300"
            x-transition:enter-start="opacity-0"
            x-transition:enter-end="opacity-100"
            x-transition:leave="transition-opacity ease-in duration-300"
            x-transition:leave-start="opacity-100"
            x-transition:leave-end="opacity-0"
            class="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          ></div>
          <!-- Modal Content -->
          <div
            x-show="open"

            x-transition:enter="transition-transform ease-out duration-300"
            x-transition:enter-start="transform scale-75"
            x-transition:enter-end="transform scale-100"
            x-transition:leave="transition-transform ease-in duration-300"
            x-transition:leave-start="transform scale-100"
            x-transition:leave-end="transform scale-75"
            class="bg-white  rounded-md shadow-xl overflow-hidden max-w-md w-full sm:w-96 md:w-1/2 lg:w-2/3 xl:w-1/3 z-50"
          >
            <!-- Modal Header -->
            <div
              class="bg-orange-400 text-white px-4 py-2 flex justify-center items-center"
            >
              <h2 class="font-semibold text-xl">Slok</h2>
            </div>
            <!-- Modal Body -->
            <div class="p-4">
              <p>
                ${summary}
              </p>
            </div>
            <!-- Modal Footer -->
            <div class="border-t px-4 py-2 bg-orange-400 flex justify-end">
              <button
                x-on:click="open = false"
                class="px-3 py-1 bg-orange-400 border text-white rounded-md w-full sm:w-auto"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>`;
  return false;
};
