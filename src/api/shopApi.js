import AddFeature from "../Components/Assets/donateAddFeature.jpg";
import AdminClaim from "../Components/Assets/donateAdminClaim.jpg";
import Blessed from "../Components/Assets/donateBlessed.jpg";
import ExpBoost from "../Components/Assets/donateExpBoost.jpg";
import Nightgod from "../Components/Assets/donateNightgod.jpg";
import Oathchosen from "../Components/Assets/donateOathchosen.jpg";
import Peacemaker from "../Components/Assets/donatePeacemaker.jpg";
import ResetPoints from "../Components/Assets/donateResetPoints.jpg";
import Sungod from "../Components/Assets/donateSungod.jpg";
import ToolSet from "../Components/Assets/donateToolSet.jpg";
import Wargod from "../Components/Assets/donateWargod.jpg";




const API_URL = "http://localhost:3000/api/shop";

export const getShopItems = async () => {
  try {
    const res = await fetch(`${API_URL}/items`);

    if (!res.ok) throw new Error("Ошибка загрузки товаров");

    return await res.json();
  } catch (e) {
    console.warn("API недоступен, используем mock данные");

    return [
      {
        id: "donate_tool_set",
        title: "Набор инструментов",
        price: 100,
        image: ToolSet,
        category: "other",
        description: (
          <>
            <p style={{ fontStyle: "italic", color: "#555555" }}>
              «Рука мастера не знает усталости, а инструменты не знают смерти»
            </p>

            <p>
              Набор из незеритовых инструментов с хорошими чарами,
              которые не выпадают после смерти.
            </p>

            <p>
              Самое то, если хотите быстро отстроить своё королевство!
            </p>
          </>
        )
      },

      {
        id: "donate_admin_claim",
        title: "Админ, заприватить",
        price: 50,
        image: AdminClaim,
        category: "other",
        description: (
          <>
            <p style={{ fontStyle: "italic", color: "#555555" }}>
              «Сама земля признаёт твоё право на этот край»
            </p>

            <p>
              Админ прилетит и заприватит огромную территорию,
              на которую у вас не хватает привата.
            </p>

            <p>
              Также может передать её вам.
            </p>

            <p>
              Иногда выгоднее, чем покупать целую привилегию
              ради одного большого привата.
            </p>
          </>
        )
      },

      {
        id: "donate_exp_boost",
        title: "Буст опыта",
        price: 50,
        image: ExpBoost,
        category: "booster",
        description: (
          <>
            <p style={{ fontStyle: "italic", color: "#555555" }}>
              «Память предков течёт в твоих жилах»
            </p>

            <p>
              Пока не работает :(
            </p>
          </>
        )
      },

      {
        id: "donate_reset_points",
        title: "Очки сброса",
        price: 50,
        image: ResetPoints,
        category: "other",
        description: (
          <>
            <p style={{ fontStyle: "italic", color: "#555555" }}>
              «Каждый воин достоин второго шанса переписать свою судьбу»
            </p>

            <p>Получите:</p>

            <p>- 1 очко смены класса</p>
            <p>- 1 очко перераспределения умений</p>
            <p>- 1 очко перераспределения атрибутов</p>
          </>
        )
      },

      {
        id: "donate_blessed",
        title: "[Благословленный]",
        price: 80,
        image: Blessed,
        category: "status",
        description: (
          <>
            <p style={{ fontStyle: "italic", color: "#555555" }}>
              «Мир относится к тебе чуть мягче»
            </p>

            <p>
              Префикс в табе, чате и возле ника
            </p>

            <p>
              <span style={{ color: "#55FF55" }}>
                2 дома
              </span>{" "}
              в /sethome
            </p>

            <p>
              Приваты до{" "}
              <span style={{ color: "#AA00AA" }}>
                45000
              </span>
            </p>

            <p>
              Максимум{" "}
              <span style={{ color: "#55FFFF" }}>
                3 привата
              </span>
            </p>
          </>
        )
      },

      {
        id: "donate_wargod",
        title: "[Избранник Битв]",
        price: 150,
        image: Wargod,
        category: "status",
        description: (
          <>
            <p style={{ fontStyle: "italic", color: "#555555"}}>
              «Боги смотрят на твои поединки с интересом — и никогда не отворачиваются»
            </p>
            
            <p>
              Всё что у Благословленного +
            </p>

            <p>
              Префикс{" "}
              <span style={{ color: "#FFAA00" }}>
                Избранник Битв
              </span>
            </p>

            <p>
              <span style={{ color: "#55FF55" }}>
                3 дома
              </span>
            </p>

            <p>
              Приваты до{" "}
              <span style={{ color: "#AA00AA" }}>
                65000
              </span>
            </p>

            <p>
              Максимум{" "}
              <span style={{ color: "#0000AA" }}>
                4 привата
              </span>
            </p>

            <p>
              Будущие боевые способности
            </p>
          </>
        )
      },

      {
        id: "donate_sungod",
        title: "[Избранник Света]",
        price: 150,
        image: Sungod,
        category: "status",
        description: (
          <>
            <p style={{ fontStyle: "italic", color: "#555555" }}>
              «Свет не исцеляет — он требует быть достойным»
            </p>

            <p>
              Всё что у Благословленного +
            </p>

            <p>
              Префикс{" "}
              <span style={{ color: "#FFAA00" }}>
                Избранник Света
              </span>
            </p>

            <p>
              <span style={{ color: "#00AA00" }}>
                3 дома
              </span>
            </p>

            <p>
              Приваты до{" "}
              <span style={{ color: "#AA00AA" }}>
                65000
              </span>
            </p>

            <p>
              Максимум{" "}
              <span style={{ color: "#0000AA" }}>
                4 привата
              </span>
            </p>
          </>
        )
      },

      {
        id: "donate_nightgod",
        title: "[Избранник Вечной Ночи]",
        price: 150,
        image: Nightgod,
        category: "status",
        description: (
          <>
            <p style={{ fontStyle: "italic", color: "#555555" }}>
              «Тьма не скрывает труса — она укрывает того, кто сам стал тенью»
            </p>

            <p>
              Всё что у Благословленного +
            </p>

            <p>
              Префикс{" "}
              <span style={{ color: "#5555FF" }}>
                Избранник Вечной Ночи
              </span>
            </p>

            <p>
              <span style={{ color: "#55FF55" }}>
                3 дома
              </span>
            </p>

            <p>
              Приваты до{" "}
              <span style={{ color: "#AA00AA" }}>
                65000
              </span>
            </p>

            <p>
              Максимум{" "}
              <span style={{ color: "#55FFFF" }}>
                4 привата
              </span>
            </p>
          </>
        )
      },

      {
        id: "donate_peacemaker",
        title: "[Миротворец]",
        price: 180,
        image: Peacemaker,
        category: "status",
        description: (
          <>
            <p style={{ fontStyle: "italic", color: "#555555" }}>
              «Твой топор сажает деревья, а меч перековывается в плуг. Иногда — в прямом смысле»
            </p>

            <p>
              Всё что у Благословленного +
            </p>

            <p>
              Префикс{" "}
              <span style={{ color: "#55FF55" }}>
                Миротворец
              </span>
            </p>

            <p>
              Приваты до{" "}
              <span style={{ color: "#AA00AA" }}>
                100000
              </span>
            </p>

            <p>
              Максимум{" "}
              <span style={{ color: "#55FFFF" }}>
                5 приватов
              </span>
            </p>

            <p>
              Бонусы к строительству и ресурсам
            </p>
          </>
        )
      },

      {
        id: "donate_oathchosen",
        title: "[Избранник Клятвы]",
        price: 270,
        image: Oathchosen,
        category: "status",
        description: (
          <>
            <p style={{ fontStyle: "italic", color: "#555555" }}>
              «Слово, данное однажды, весит больше, чем гора. Ты носишь его с гордостью»
            </p>

            <p>
              Все бонусы избранников богов +
            </p>

            <p>
              Уникальный префикс{" "}
              <span style={{ color: "#FF55FF" }}>
                Избранник Клятвы
              </span>
            </p>

            <p>
              <span style={{ color: "#55FF55" }}>
                4 дома
              </span>
            </p>

            <p>
              Приваты до{" "}
              <span style={{ color: "#AA00AA" }}>
                100000
              </span>
            </p>

            <p>
              Максимум{" "}
              <span style={{ color: "#55FFFF" }}>
                5 приватов
              </span>
            </p>
          </>
        )
      },

      {
        id: "donate_add_feature",
        title: "Админ добавь фичу",
        price: 0,
        image: AddFeature,
        category: "other",
        description: (
          <>
            <p style={{ fontStyle: "italic", color: "#555555" }}>
              «Голос смертного достиг чертогов творцов — и они услышали»
            </p>

            <p>
              Быстрое добавление идеи в игру вне очереди обновлений.
            </p>

            <p>
              Любая фэнтези/RPG идея (в разумных рамках мира).
            </p>
          </>
        )
      }
    ];
  }
};

export const buyItem = async (itemId) => {
  try {
    const res = await fetch(`${API_URL}/buy`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ itemId })
    });

    if (!res.ok) throw new Error("Ошибка покупки");

    return await res.json();
  } catch (e) {
    console.warn("Покупка (mock):", itemId);

    return {
      success: true,
      message: "Purchase completed (mock)"
    };
  }
};