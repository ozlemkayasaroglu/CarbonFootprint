const questions = [
  {
    question:
      "Her gün arabanızı kullanarak atmosfere ne kadar karbon bıraktığınızı düşünün, haftada kaç gün özel aracınızı kullanıyorsunuz?",
    options: [
      { text: "Hiç kullanmıyorum", point: 0 },
      { text: "1-3 gün", point: 10 },
      { text: "4 veya daha fazla gün", point: 20 },
    ],
  },
  {
    question:
      "Evinizde sıradan ampuller yerine enerji tasarruflu ampuller kullanarak çevreye nasıl bir iyilik yapabileceğinizi biliyor musunuz?",
    options: [
      {
        text: "Evet, tüm evde enerji tasarruflu ampuller kullanıyorum",
        point: 0,
      },
      { text: "Bazı odalarda kullanıyorum", point: 10 },
      { text: "Hayır, hiç kullanmıyorum", point: 20 },
    ],
  },
  {
    question:
      "Bir uçak yolculuğunun, bir yıl boyunca bir ağacın temizleyebileceği karbon miktarını birkaç saatte ürettiğini biliyor musunuz? Ayda kaç kez uçakla seyahat ediyorsunuz?",
    options: [
      { text: "Hiç seyahat etmiyorum", point: 0 },
      { text: "1-2 kez", point: 15 },
      { text: "3 veya daha fazla kez", point: 30 },
    ],
  },
  {
    question:
      "Et üretiminin dünya genelindeki sera gazı salınımının %14’ünden sorumlu olduğunu biliyor muydunuz? Beslenme alışkanlıklarınız nasıl?",
    options: [
      { text: "Genelde bitkisel bazlı besleniyorum", point: 0 },
      { text: "Haftada 1-2 kez et tüketiyorum", point: 10 },
      { text: "Hemen hemen her gün et tüketiyorum", point: 20 },
    ],
  },
  {
    question:
      "Tek kullanımlık plastiklerin okyanuslara her yıl milyonlarca ton atık olarak karıştığını bilerek plastik atıklarınızı nasıl yönetiyorsunuz?",
    options: [
      { text: "Plastik kullanımını tamamen azaltmaya çalışıyorum", point: 0 },
      {
        text: "Plastikleri geri dönüştürüyorum ama hala kullanıyorum",
        point: 10,
      },
      { text: "Geri dönüşüm yapmıyorum", point: 20 },
    ],
  },
  {
    question:
      "Evde elektrik tüketimini azaltarak hem doğaya hem de faturalarınıza katkı sağlayabileceğinizi biliyor musunuz? Evde enerji tüketiminizi nasıl yönetiyorsunuz?",
    options: [
      { text: "Kullanmadığım tüm cihazları kapatıyorum", point: 0 },
      { text: "Sadece bazen dikkat ediyorum", point: 10 },
      { text: "Hiç dikkat etmiyorum", point: 20 },
    ],
  },
  {
    question:
      "Yerel ve mevsimsel ürünleri tercih etmenin karbon ayak izinizi önemli ölçüde azalttığını biliyor musunuz? Alışveriş yaparken tercihleriniz nasıl?",
    options: [
      { text: "Her zaman yerel ve mevsimsel ürünleri tercih ederim", point: 0 },
      { text: "Bazen dikkat ediyorum", point: 10 },
      { text: "Hiç dikkat etmiyorum", point: 20 },
    ],
  },
  {
    question:
      "Bir ton atığın geri dönüştürülmesiyle 17 ağacın kesilmekten kurtarıldığını biliyor musunuz? Geri dönüşüm alışkanlığınız nasıl?",
    options: [
      { text: "Düzenli olarak tüm atıklarımı geri dönüştürüyorum", point: 0 },
      { text: "Sadece bazılarını geri dönüştürüyorum", point: 10 },
      { text: "Hiç geri dönüşüm yapmıyorum", point: 20 },
    ],
  },
  {
    question:
      "Hızlı moda endüstrisinin dünya genelinde kirliliğin %10’unu oluşturduğunu bilerek kıyafet alışveriş sıklığınızı hiç düşündünüz mü?",
    options: [
      { text: "Yılda sadece birkaç kez kıyafet alırım", point: 0 },
      { text: "Ayda 1-2 kez kıyafet alırım", point: 10 },
      { text: "Sürekli yeni kıyafet alırım", point: 20 },
    ],
  },
  {
    question:
      "Muslukları açık bırakmanın, saniyede litrelerce suyun boşa gitmesine neden olduğunu bilerek su tüketiminizi nasıl yönetiyorsunuz?",
    options: [
      {
        text: "Su tasarrufu için özel ekipmanlar ve yöntemler kullanıyorum",
        point: 0,
      },
      { text: "Sadece bazen dikkat ederim", point: 10 },
      { text: "Hiç dikkat etmiyorum", point: 20 },
    ],
  },
];

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".start").addEventListener("click", startTest);
});

function startTest() {
  document.body.style.backgroundImage = "url('src/bg-image.png')";
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundRepeat = "no-repeat";
  document.body.style.backgroundPosition = "center";
  document.querySelector(".title").innerHTML = "";
  showQuestion(0);
}

let currentQuestionIndex = 0;
let totalPoints = 0;

function showQuestion(index) {
  const questionContainer = document.querySelector(".title");
  questionContainer.innerHTML = "";

  if (index >= questions.length) {
    showResult();
    return;
  }

  const questionElement = document.createElement("p");
  questionElement.textContent = questions[index].question;
  questionElement.classList.add("question");
  questionContainer.appendChild(questionElement);

  const optionElement = document.createElement("div");
  optionElement.classList.add("options");

  questions[index].options.forEach((option, i) => {
    const button = document.createElement("button");
    button.textContent = option.text;
    button.classList.add("optionButton");

    button.addEventListener("click", () => handleAnswer(index, i));

    optionElement.appendChild(button);
  });
  questionContainer.appendChild(optionElement);
}

function handleAnswer(questionIndex, optionIndex) {
  const selectedOption = questions[questionIndex].options[optionIndex];
  totalPoints += selectedOption.point;

  if (currentQuestionIndex < questions.length) {
    currentQuestionIndex++;
    showQuestion(currentQuestionIndex);
  } else {
    showResult();
  }
}

function showResult() {
  const questionContainer = document.querySelector(".title");
  questionContainer.innerHTML = "";

  const resultElement = document.createElement("p");
  resultElement.classList.add("result");

  if (totalPoints < 20) {
    resultElement.textContent =
      "Tebrikler! Karbon ayak iziniz düşük. Doğaya çok az zarar veriyorsunuz.";
  } else if (totalPoints >= 20 && totalPoints <= 60) {
    resultElement.textContent =
      "Karbon ayak iziniz orta seviyede. Daha sürdürülebilir bir yaşam için adımlar atabilirsiniz.";
  } else {
    resultElement.textContent =
      "Karbon ayak iziniz yüksek! Doğaya verdiğiniz zararı azaltmak için çevre dostu alışkanlıklar edinmelisiniz.";
  }
  resultElement.classList.add("result");
  questionContainer.appendChild(resultElement);
}
