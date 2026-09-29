import Card from "./Card";

function GreetingContainer() {

  let foodItems = [
    {
      id: 1,
      name: "South Indian",
      image:
        "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=300",
    },
    {
      id: 2,
      name: "Idli",
      image:
        "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=300",
    },
    {
      id: 3,
      name: "Dosa",
      image:
        "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=300",
    },
    {
      id: 4,
      name: "Vada",
      image:
        "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=300",
    },
    {
      id: 5,
      name: "North Indian",
      image:
        "https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?w=300",
    },
    {
      id: 6,
      name: "Desserts",
      image:
        "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=300",
    },
    {
      id: 7,
      name: "Cake",
      image:
        "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=300",
    },
    {
      id: 8,
      name: "Burger",
      image:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300",
    },
    {
      id: 9,
      name: "Poori",
      image:
        "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=300",
    },
    {
      id: 10,
      name: "Coffee",
      image:
        "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=300",
    },
    {
      id: 11,
      name: "Rolls",
      image:
        "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=300",
    },
    {
      id: 12,
      name: "Paratha",
      image:
        "https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?w=300",
    },
    {
      id: 13,
      name: "Chinese",
      image:
        "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=300",
    },
    {
      id: 14,
      name: "Omelette",
      image:
        "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=300",
    },
    {
      id: 15,
      name: "Pizza",
      image:
        "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=300",
    },
    {
      id: 16,
      name: "Chole Bhature",
      image:
        "https://images.unsplash.com/photo-1626132647523-66f5bf380027?w=300",
    },
    {
      id: 17,
      name: "Shake",
      image:
        "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=300",
    },
  ];

  return (
    <div
      style={{
        width: "100%",
        padding: "40px 9%",
        boxSizing: "border-box",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h2
        style={{
          fontSize: "28px",
          marginBottom: "30px",
          color: "#202124",
        }}
      >
        Order our best food options
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateRows: "repeat(2, 210px)",
          gridAutoFlow: "column",
          gridAutoColumns: "170px",
          columnGap: "25px",
          overflowX: "auto",
          overflowY: "hidden",
          scrollbarWidth: "none",
        }}
      >
        {foodItems.map((item) => (
          <Card
            key={item.id}
            image={item.image}
            name={item.name}
          />
        ))}
      </div>
    </div>
  );
}

export default GreetingContainer;