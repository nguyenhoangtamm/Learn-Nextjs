'use server';
export default async function ServerComponent() {

    const data = ['Apple', 'Banana', 'Orange'];

    return (
      <div>
        <h1>Danh sách trái cây</h1>
        <ul>
          {data.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    );
}