using backend.DatabaseModel;
using Microsoft.AspNetCore.Mvc;
using WebApplication1.Service;

namespace WebApplication1.Controllers;

[ApiController]
[Route("/api/transactions")]
public class TransactionController: ControllerBase
{
    private readonly ITransactionService transactionService;

    public TransactionController(ITransactionService transactionService)
    {
        this.transactionService = transactionService;
    }
    
    [HttpGet("{id}",Name = "GetTransaction")]
    public TransactionViewModel Get(int id)
    {
        return transactionService.GetTransaction(id);
    }
    
    [HttpGet(Name = "GetTransactions")]
    public List<TransactionViewModel> GetAll()
    {
        return transactionService.GetAllTransactions();
    }
}