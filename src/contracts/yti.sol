// YouTweakIt Source code
pragma solidity ^0.4.18;



//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
// контракт для определения прав владения
contract Ownable {

   address public owner;

   // выполняется при деплое
   function Ownable() public {
      owner = msg.sender;
   }

   // только владелец
   modifier onlyOwner() {
      require(msg.sender == owner);
      _;
   }

   // уничтожить контракт
   function kill() public onlyOwner {
      selfdestruct(owner);
   }

   // передать владение контрактом другому лицу
   function transferOwnership(address newOwner) public onlyOwner {
      if (newOwner != address(0)) {
         owner = newOwner;
      }
   }

}



//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
// главный контракт
contract YouTweakIt is Ownable {

   // выполняется при деплое
   function YouTweakIt() public {
      //
   }

}



//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
// контракт для создания брендов
contract BrandCard is Ownable {

   // выполняется при деплое
   function BrandCard() public {
      //
   }

   // конструктор бренда
   struct Brand {
      uint brandId;
      string name;
      string category;
      address brandOwner;
   }

   // список брендов
   Brand[] brands;

   // добавить бренд
   function addBrand (
      string _name,
      string _category
   )
   public
   returns (uint)
   {
      uint _brandId = brands.length;
      Brand memory _brand = Brand({
         brandId: _brandId,
         name: _name,
         category: _category,
         brandOwner: msg.sender
      });
      return brands.push(_brand) - 1;
   }

   // получение данных о бренде по его айди
   function getBrand(uint _brandId) view public
   returns
   (
      uint brandId,
      string name,
      string category,
      address brandOwner
   ) {
      return (
         brands[_brandId].brandId,
         brands[_brandId].name,
         brands[_brandId].category,
         brands[_brandId].brandOwner
      );
   }

}



//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
// контракт для создания идей
contract TweakCard is Ownable {

   // выполняется при деплое
   function TweakCard() public {
      //
   }

   // конструктор идей
   struct Tweak {
      uint tweakId;
      uint brandId;
      string text;
      address tweakOwner;
   }

   // список идей
   Tweak[] tweaks;

   // добавить идею к бренду
   function addTweak (
      uint _brandId,
      string _text
   )
   public
   returns (uint)
   {
      uint _tweakId = tweaks.length;
      Tweak memory _tweak = Tweak({
         tweakId: _tweakId,
         brandId: _brandId,
         text: _text,
         tweakOwner: msg.sender
      });
      return tweaks.push(_tweak) - 1;
   }

   // получение данных об идее по ее айди
   function getTweak(uint _tweakId) view public
   returns
   (
      uint tweakId,
      uint brandId,
      string text,
      address tweakOwner
   ) {
      return (
         tweaks[_tweakId].tweakId,
         tweaks[_tweakId].brandId,
         tweaks[_tweakId].text,
         tweaks[_tweakId].tweakOwner
      );
   }

}
