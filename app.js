let translator = document.getElementById("translator");
let textP = document.getElementById("textContent");
let lang = document.getElementById("select");

translator.addEventListener("input", (event) => {
  textP.textContent = translator.value;
  translateText();
});

lang.addEventListener("change", () => {
  translateText();
});

const translateText = async () => {
  const url = "https://text-translator2.p.rapidapi.com/translate";
  const selectedValue = lang.value;

  const options = {
    method: "POST",
   headers: {
		'content-type': 'application/x-www-form-urlencoded',
		'X-RapidAPI-Key': '8e12abd9admsh9c4d8257884f39dp13d968jsn0a63f4677bd4',
		'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com'
	},
    body: new URLSearchParams({
      source_language: selectedValue,
      target_language: "en",
      text: translator.value,
    }),
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    textP.textContent = result.data.translatedText;
    console.log(result);
  } catch (error) {
    console.error(error);
  }
};

translateText();
