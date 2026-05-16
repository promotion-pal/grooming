const Map = () => {
  return (
    <div className="bg-wrapper/10 rounded-xl h-80 flex items-center justify-center border border-wrapper/20 overflow-hidden">
      <div
        style={{
          position: "relative",
          overflow: "hidden",
          width: "100%",
          height: "100%",
          minHeight: "320px",
        }}
      >
        <iframe
          src="https://yandex.ru/map-widget/v1/?ll=135.059570%2C48.465093&mode=search&poi%5Bpoint%5D=135.071347%2C48.480578&poi%5Buri%5D=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1MzA2NzcyMBIg0KDQvtGB0YHQuNGPLCDQpdCw0LHQsNGA0L7QstGB0LoiCg1pEgdDFcHrQUI%2C&sctx=ZAAAAAgBEAAaKAoSCdlg4SRN4mBAEb3kf%2FJ3PUhAEhIJuHh4z4Hl0j8RCAWlaOVe4z8iBgABAgMEBSgKOABAvJAGSAFqAnJ1nQHNzMw9oAEAqAEAvQE14okUwgES1a%2BI1v8D1dzJvvUB%2B6ap9%2BsEggIx0KHQsdC10YDQsdCw0L3QuiDQoNC%2B0YHRgdC40LgsINC%2B0YLQtNC10LvQtdC90LjRj4oCAJICAJoCDGRlc2t0b3AtbWFwc6oCBzYwMDM2MTKwAgE%3D&sll=135.059570%2C48.465093&source=serp_navig&sspn=0.323098%2C0.662612&text=%D0%A1%D0%B1%D0%B5%D1%80%D0%B1%D0%B0%D0%BD%D0%BA%20%D0%A0%D0%BE%D1%81%D1%81%D0%B8%D0%B8%2C%20%D0%BE%D1%82%D0%B4%D0%B5%D0%BB%D0%B5%D0%BD%D0%B8%D1%8F&z=9.87"
          width="100%"
          height="100%"
          frameBorder="0"
          allowFullScreen
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            border: 0,
            width: "100%",
            height: "100%",
          }}
          title="Yandex Map"
        />
      </div>
    </div>
  );
};

export { Map };
