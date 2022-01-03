


export class NewsPaper {

  public name: string; // ex: DN
  public edition: number; // "id"
  public printDate: string;
  public frontNewsHeadline: string;

  constructor(name: string, edition: number, printDate: string, headline: string) {

    this.name = name;
    this.edition = edition;

    this.printDate = printDate;
    this.frontNewsHeadline = headline;
  }
}


/**
 * wrappar newspaper för att sätta en adress till prenumeranten.
 * TODO: skapa en subject/observable som Posten agerar på.
 * De får alltså en tidning med en adress till prenumeranten.
 *
 * förslagsvis läggs en array (många tidningar) i den subject som posten lyssnar på , dvs .subscribe(...).
 */
 export class NewsPaperForDelivery extends NewsPaper{
  public address: string;
  /**
   *
   */
  constructor(address: string, newsPaper: NewsPaper) {

    super(newsPaper.name,
      newsPaper.edition,
      newsPaper.printDate,
       newsPaper.frontNewsHeadline);

    this.address = address;

  }
}
