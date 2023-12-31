import { Component, ElementRef, EventEmitter, Input, Output, AfterViewInit } from '@angular/core';
import { styleRoot } from '../../utils/style-utils';
import { ModalBody } from '../../interfaces/modal-body';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements AfterViewInit {
  @Output() onRemoveBlur: EventEmitter<void> = new EventEmitter<void>();
  @Input() tittleModal: string;
  @Input() modalbody: ModalBody = {
    tittle: "Este projeto ainda está em desenvolvimento",
    contentBody: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae molestias assumenda, non labore sed quam provident facilis quaerat enim sapiente quia, sequi aliquam harum tempora voluptatibus voluptates minima natus perferendis amet sunt autem eum quos ab. Natus magnam voluptatem, possimus sed sint explicabo repudiandae provident, itaque numquam laudantium similique ea? Ratione labore facilis, nulla quidem placeat sapiente nemo corrupti, quaerat quod praesentium quae unde illum dolore voluptatibus, tenetur voluptate cumque fugiat. Dolore voluptate sed eos. Voluptate iste, expedita nobis itaque dolorem inventore rerum commodi accusamus earum, neque pariatur totam placeat. Sunt laudantium recusandae quos velit, eos harum eligendi maxime perspiciatis ipsa corrupti, laborum eum sapiente deserunt quam voluptatem dolores! Aut porro hic nulla corrupti natus quis, facilis architecto quos dolores laboriosam repudiandae minus ratione officia quia similique tenetur perferendis, cum quasi asperiores eveniet consectetur facere libero illo! Officia vero delectus, perspiciatis maxime laudantium labore nisi dolor soluta, ab laboriosam aliquam quia voluptatem commodi? Dolores nisi, molestias soluta odio eaque culpa odit ipsum voluptas obcaecati mollitia voluptatum sapiente quia quis totam reiciendis nesciunt molestiae porro reprehenderit iusto veniam. Ut nam quidem blanditiis omnis laudantium quasi tenetur enim possimus laboriosam, accusantium reiciendis! Ea adipisci molestias inventore vero at minima ipsam quasi sapiente expedita voluptates aliquid odio iste consequatur labore assumenda, ad natus repellendus. Aperiam modi nisi, quod explicabo molestias adipisci eos, earum similique officia laborum atque? Et porro ipsam consectetur praesentium molestias natus delectus odio totam similique magnam dolore consequatur beatae quaerat maiores fugit, laboriosam pariatur atque. Debitis ut quo temporibus adipisci nihil illo rerum cumque quas! Adipisci, quos alias similique voluptate vel doloremque incidunt expedita harum earum tempore, rem magnam praesentium tempora quaerat? Neque, unde ipsa? Quod cum quo hic non, eum repellendus molestiae sit soluta voluptatem, quidem quibusdam voluptatum eius molestias veniam, aut quasi corrupti ullam aspernatur assumenda similique eaque incidunt totam. Hic error ducimus nisi adipisci! Ducimus harum et voluptates accusantium ad illo eos non reiciendis provident voluptatibus culpa est corrupti hic nemo impedit sed exercitationem, possimus reprehenderit odio! Commodi quibusdam laborum provident, quas eaque velit? Magni modi laudantium deserunt aperiam rerum aut quaerat totam facilis ad quod tenetur odit, culpa minus autem, iste esse quas quo consectetur, itaque distinctio? Non aperiam ab sunt molestiae, velit a labore nostrum! Assumenda rem esse perspiciatis, perferendis pariatur maxime expedita veniam animi minus non consequatur quasi. Harum possimus recusandae, architecto tempora ipsum, explicabo perferendis provident culpa ad officia rerum earum a fugiat sed hic deleniti accusamus eos incidunt consequatur facere nesciunt labore quasi, velit amet. Cumque autem, sint sunt obcaecati sapiente exercitationem quos dolor! Dicta ut expedita, labore voluptatibus odio deleniti excepturi placeat dolor error voluptate ullam dolores vel culpa eos corporis hic nisi fuga odit fugiat voluptatum. Eum, molestias sed? Cum soluta nisi aliquid nemo sapiente tenetur nostrum totam molestiae! Iusto laudantium explicabo reiciendis quo ex. Reiciendis recusandae soluta consectetur aperiam, quo eaque, illo, esse quasi nulla delectus fugit repudiandae aspernatur voluptatibus mollitia rerum corporis? Veritatis iure fugiat repellat quasi est corporis libero iste, sunt voluptatem voluptas et accusantium odit nesciunt hic ratione consequatur molestias rerum commodi vero ipsam animi, perferendis dicta quo ea. Adipisci molestias qui dolorem omnis ducimus distinctio incidunt debitis totam, earum saepe corporis voluptates, perspiciatis consectetur hic! Sunt consectetur error eveniet corporis, qui ipsum quaerat reiciendis accusantium est labore optio impedit? Blanditiis sequi placeat quas rem? Ipsa nisi aliquam sapiente veritatis nesciunt porro quas fugiat optio quia illum dolorem ad libero fugit necessitatibus, alias rerum temporibus quaerat placeat corrupti. Harum deserunt adipisci delectus possimus hic sapiente exercitationem sed unde alias a ipsam ab esse, explicabo iusto debitis et? Accusantium rem illo nam eos perspiciatis id magni, eaque, animi cum magnam doloribus aperiam iste sit recusandae. Tempora, ratione dignissimos cum ex iure ut similique sequi dolorum eos recusandae, assumenda, consectetur ab incidunt magni perferendis? Adipisci corrupti molestiae eligendi qui, sed quaerat? Ratione assumenda, excepturi ducimus animi nemo quaerat ea. Neque commodi fuga obcaecati perspiciatis, reiciendis enim dolorem necessitatibus. Voluptatum, rem. Nam mollitia ut sunt vitae ducimus earum minima est modi, provident officia neque obcaecati assumenda rerum nostrum. Praesentium debitis ut vero nostrum, cum ratione itaque corporis, voluptas, ea nobis sapiente adipisci! Soluta ducimus, quis voluptatem nemo, alias dolore exercitationem odit fugit nisi facilis cum ipsam consequuntur voluptas error veniam odio et laudantium amet minus quod repellat inventore quia quibusdam ut? Quam corporis atque totam, dicta natus inventore facilis cum cupiditate numquam, saepe in temporibus cumque quasi, molestiae quod possimus magnam mollitia deleniti voluptas est ullam? Facere, doloribus saepe nihil vel quis harum quae cum molestiae rerum quaerat ex ipsum ea molestias incidunt. Suscipit officia laboriosam, sapiente qui blanditiis est possimus velit dolorum ipsa quod unde necessitatibus quas illo, incidunt consequatur, doloremque commodi. Iure quisquam eius dignissimos et pariatur nobis, placeat veritatis eveniet vero quia! Iure dicta rerum quis? Error non eligendi veniam dolor sit vel quia culpa neque illo, inventore quisquam similique. Repellat eum repudiandae placeat ratione natus, hic, at, distinctio sapiente eligendi ea vitae qui reiciendis quod illum odio quo ipsum aspernatur omnis eius facilis libero minus. Sequi culpa, labore debitis iure delectus dolor minus cum aliquam assumenda laborum necessitatibus saepe quibusdam, perspiciatis dolorem? Dicta laboriosam voluptatibus consequuntur quia corporis tempora voluptatem rerum. Optio quisquam tempore quasi cumque eius amet sapiente voluptatem suscipit! Id omnis nam tempora ut voluptas vel! Est nihil provident molestiae, quidem impedit illo itaque, laudantium, ullam quasi omnis natus ut doloremque quam? Aliquam, dolorum quae aperiam repellat et similique autem, sunt minima molestiae cumque vero facilis, at iste rerum expedita. Quam saepe facilis veritatis magnam tempore reiciendis repudiandae itaque voluptatem dolore delectus distinctio soluta quisquam dolorem quo laboriosam, dolor ratione a doloribus earum voluptas nesciunt aspernatur neque! Soluta ad porro delectus explicabo nostrum! Dignissimos, ad aspernatur officia quasi beatae illo recusandae quibusdam vero atque sint libero error facilis reprehenderit nam eaque possimus provident ea. Id voluptates dolorem non ut tempora blanditiis reiciendis? Similique neque dolor, voluptatum amet ratione reprehenderit velit blanditiis dicta voluptate officiis aliquam nemo voluptatibus, voluptates numquam doloribus facere ullam tempore? Eveniet et eos inventore laboriosam ut quaerat laborum porro enim!"
  }
  public isClose: boolean = false;
  public modal: HTMLElement;
  public description: HTMLElement;

  constructor(
    private elementRef: ElementRef
  ){}

  ngAfterViewInit(): void {
    this.modal = this.elementRef.nativeElement.querySelector(".modal");
    this.modal.style.display = "none";
    this.description = this.elementRef.nativeElement.querySelector(".descriptionModal");
    // this.description.innerHTML = this.modalbody.contentBody;
  }

  public removeBlur():void{
    this.onRemoveBlur.emit();
  }

  public openModal():void{
    styleRoot?.style.setProperty("--body-y","hidden");
    this.modal.style.display = "flex";
    setTimeout(() => {
      this.modal.style.opacity = "1";
    }, 100);
  }

  public closeModal():void{
    this.modal.style.opacity = "0";
    this.removeBlur();
    styleRoot?.style.setProperty("--body-y","none");
    setTimeout(() => {
        this.modal.style.display = "none";
      }, 300);
  }
}
