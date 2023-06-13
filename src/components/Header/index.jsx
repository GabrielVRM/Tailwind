import Logo from "./Logo";
import SearchForm from "./SearchForm";

export default function Header() {
    
    return(
        <header className="flex justify-between items-center px-4 xl:px-6 h-16 lg-h-20 md:gap-16 gap-8 xl:gap-32 bg-zinc-100 dark:bg-zinc-800">
            <Logo/>
        <SearchForm/>
        <div>Avatar</div>
        </header>
    )
}