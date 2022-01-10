import './App.css';
import Item from './components/Item';

function App() {
  const item = JSON.parse(
    itemJson
      .replaceAll('\n', '\\n')
      .replaceAll('\r', '\\r')
      .replaceAll('\t', '\\t')
  );
  return <Item item={item} />;
}

const itemJson = `{"listing_id":708099714,"state":"active","user_id":134783484,"category_id":69150433,"title":"Beautiful Lodolite Quartz Rutile Mix Gemstone, 23x18mm, 29Cts Lodolite Quartz Rutile Gemstone, Handmade Jewelry Making Loose Gemstone BB-400","description":"cloude9gems\n\n\nGemstone : Lodolite Quartz Rutile\n\nStone Size : 23x18mm\n\nStone Cut : Cabochon\n\nStone Weight : 29Cts\n\nStone Shape : Pear\n\n\n\n******************************************************************************************************\nI guarantee that it is 100% NATURAL and free of treatments of any kind.\n\nCheck my other items frequently. I will be adding to the inventory regularly.\n\nBe sure to visit my shop to check for :\nCloude9GemsArt.etsy.com\n\nThank you for visiting our shop :))","creation_tsz":1563354764,"ending_tsz":1573985564,"original_creation_tsz":1563354764,"last_modified_tsz":1563354765,"price":"15.99","currency_code":"USD","quantity":1,"sku":[],"tags":["Natural","Handmade","No Treatment","Pear"],"category_path":["Supplies"],"category_path_ids":[69150433],"materials":["Gemstone"],"shop_section_id":23048716,"featured_rank":null,"state_tsz":1563354764,"url":"https://www.etsy.com/listing/708099714/beautiful-lodolite-quartz-rutile-mix?utm_source=netoapi&utm_medium=api&utm_campaign=api","views":0,"num_favorers":0,"shipping_template_id":51922537459,"processing_min":1,"processing_max":2,"who_made":"i_did","is_supply":"false","when_made":"2010_2019","item_weight":null,"item_weight_unit":"g","item_length":null,"item_width":null,"item_height":null,"item_dimensions_unit":"mm","is_private":false,"recipient":null,"occasion":null,"style":null,"non_taxable":false,"is_customizable":false,"is_digital":false,"file_data":"","should_auto_renew":false,"language":"en-US","has_variations":false,"taxonomy_id":6240,"taxonomy_path":["Craft Supplies & Tools","Beads, Gems & Cabochons","Cabochons"],"used_manufacturer":false,"MainImage":{"listing_image_id":1945247446,"hex_code":null,"red":null,"green":null,"blue":null,"hue":null,"saturation":null,"brightness":null,"is_black_and_white":null,"creation_tsz":null,"listing_id":708099714,"rank":null,"url_75x75":"https://i.etsystatic.com/16754592/d/il/63cb4f/1945247446/il_75x75.1945247446_kh4u.jpg?version=0","url_170x135":"https://i.etsystatic.com/16754592/d/il/63cb4f/1945247446/il_170x135.1945247446_kh4u.jpg?version=0","url_570xN":"https://i.etsystatic.com/16754592/r/il/63cb4f/1945247446/il_570xN.1945247446_kh4u.jpg","url_fullxfull":"https://i.etsystatic.com/16754592/r/il/63cb4f/1945247446/il_fullxfull.1945247446_kh4u.jpg","full_height":null,"full_width":null}}`;

export default App;
