export default function ProductCategoryRow({ category }) {
  console.log(category);
  return (
    <tr>
      <th colSpan="2">{category}</th>
    </tr>
  );
}
