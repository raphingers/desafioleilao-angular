import{ Component, OnInit } from "@angular/core";
import { AuthService } from "./auth.service";
import { AuthClass } from "../login/auth"
import { Router, ActivatedRoute } from "@angular/router";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
  })
export class LoginComponent implements OnInit{

    constructor(
        private authService: AuthService,
        private router: Router,
        private route: ActivatedRoute,
        ) { }

    public usuario: AuthClass = {
        nome: '',
        senha: ''
    };
    public mensagem: string;

    ngOnInit(){
    }

    fazerLogin(){
        this.authService.fazerLogin(this.usuario)
        .subscribe((response) => {
            localStorage.setItem("token", response.token);
            this.router.navigate(['leilao'])
        },
        (error)=>{
            this.mensagem = "Usuário e/ou Senha inválido(s)";
        });

    }
}